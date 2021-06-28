import fm from 'format-message';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import React, { useCallback } from 'react';
import { Container, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useRef } from 'react';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import getValidationErrors from 'utils/getValidationsErrors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/Auth';
import { useHistory } from 'react-router-dom';

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          senha: data.password,
        });

        history.push('/solicitacoes');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [signIn],
  );

  return (
    <>
      <ToastContainer />
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <Button buttonStyle="blue" type="submit">
              {fm('screen.login.button')}
            </Button>
            <a href="/signup">{fm('screen.login.option')}</a>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
