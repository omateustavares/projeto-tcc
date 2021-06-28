import React, { useCallback, useRef } from 'react';
import fm from 'format-message';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationsErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { Container } from './styles';
import api from 'services/api';

interface SignUpFormData {
  aluno: string;
  escola: string;
  responsavel: string;
  corpo: string;
}

const NovaSolicitacao: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          escola: Yup.string().required('Escola obrigatório'),
          aluno: Yup.string().required('Aluno obrigatório'),
          responsavel: Yup.string().required('Responsável obrigatório'),
          corpo: Yup.string().required('Corpo da solicitaçõa obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('solicitacaoAdministracao/create', {
          nome_aluno: data.aluno,
          nome_responsavel: data.responsavel,
          nome_escola: data.escola,
          descricao: data.corpo,
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
    [history],
  );

  return (
    <Container>
      <section>
        <h2>Nova Solicitação</h2>
        <Form
          className="formSolicitation"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="formSolicitation--email">
            <Input name="escola" placeholder="ESCOLA" />
          </div>

          <div className="formSolicitation--info">
            <Input name="aluno" placeholder="ALUNO" />
            <Input name="responsavel" placeholder="RESPONSÁVEL" />
          </div>

          <div className="formSolicitation--textarea">
            <TextArea name="corpo" placeholder="CORPO DA SOLICITAÇÃO" />
          </div>

          <Button buttonStyle="blue" type="submit">
            {fm('screen.new.solicitation')}
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default NovaSolicitacao;
