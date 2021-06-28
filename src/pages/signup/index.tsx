import React, { useCallback, useRef } from 'react';
import {
  FiFile,
  FiUser,
  FiMail,
  FiLock,
  FiList,
  FiPhone,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationsErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Select from '../../components/Select';
import InputMaskCellPhone from '../../components/InputMaskCellPhone';

import { Container, Content } from './styles';
import api from 'services/api';
import { useToast } from 'hooks/toast';

interface SignUpFormData {
  nome: string;
  email: string;
  senha: string;
  contato: string;
  documento: string;
  id_atuacao: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          contato: Yup.string().required('Contato obrigatório'),
          documento: Yup.string().required('CPF obrigatório'),
          senha: Yup.string().min(6, 'No minímo 6 digitos'),
          id_atuacao: Yup.string().required('Área de atuação obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/especialista/create', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado com  sucesso',
          description: 'Você já pode fazer seu logon no Sysweb',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro no fazer o cadastro, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="nome" icon={FiUser} placeholder="Nome completo" />
            <InputMask name="documento" icon={FiFile} placeholder="CPF" />
            <InputMaskCellPhone
              name="contato"
              icon={FiPhone}
              placeholder="Contato"
            />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="senha"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Select name="id_atuacao" icon={FiList} />

            <Button buttonStyle="blue" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
