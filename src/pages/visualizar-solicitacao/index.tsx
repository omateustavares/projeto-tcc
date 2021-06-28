import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';

import { Container } from './styles';

import Input from '../../components/Input';
import { Form } from '@unform/web';

interface ParamTypes {
  id: string;
}

interface InformationData {
  area_atuacao: string;
  contato: string;
  descricao: string;
  documento: string;
  email: string;
  nome: string;
  nome_aluno: string;
  nome_escola: string;
  nome_responsavel: string;
  status: boolean;
}

const VisualizarSolicitacao: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [information, setInformation] = useState<InformationData>();
  console.log(information);
  useEffect(() => {
    const load = async () => {
      const response = await api.get(`/solicitacaoAdministracao/viewer/${id}`);
      setInformation(response.data[0]);
    };
    load();
  }, []);

  return (
    <Container>
      <section>
        <h3>Solicitação - {information?.status}</h3>
        <hr className="divider" />
        <div className="student">
          <div className="information">
            <label>Escola</label>
            <div>
              <span>{information?.nome_escola}</span>
            </div>
          </div>
          <div className="information">
            <label>Aluno</label>
            <div>
              <span>{information?.nome_aluno}</span>
            </div>
          </div>
          <div className="information">
            <label>Responsável</label>
            <div>
              <span>{information?.nome_responsavel}</span>
            </div>
          </div>
        </div>
        <div className="information description">
          <label>Descrição</label>
          <div>
            <span>{information?.descricao}</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="student">
          <div className="information">
            <label>Nome</label>
            <div>
              <span>{information?.nome}</span>
            </div>
          </div>
          <div className="information">
            <label>Área de atuação</label>
            <div>
              <span>{information?.area_atuacao}</span>
            </div>
          </div>
          <div className="information">
            <label>Contato</label>
            <div>
              <span>{information?.contato}</span>
            </div>
          </div>
          <div className="information description">
            <label>E-mail</label>
            <div>
              <span>{information?.email}</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default VisualizarSolicitacao;
