import { useAuth } from 'hooks/Auth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';

import { Container } from './styles';
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
  status_finalizado: any;
}

const VisualizarSolicitacao: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [information, setInformation] = useState<InformationData>();
  const [statusSolicitation, setStatusSolicitation] = useState('');

  const { role } = useAuth();
  console.log(role);

  useEffect(() => {
    const load = async () => {
      if (role === 'CRAS') {
        await api
          .get(`/solicitacaoEspecialista/viewer/${id}`)
          .then(response => {
            setInformation(response.data[0]);
          });
      } else {
        await api
          .get(`/solicitacaoAdministracao/viewer/${id}`)
          .then(response => {
            setInformation(response.data[0]);
          });
      }
    };
    load();
  }, [id]);

  useEffect(() => {
    if (
      information?.status === true &&
      information.status_finalizado === null
    ) {
      setStatusSolicitation('Em andamento');
    }

    if (
      information?.status === false &&
      information.status_finalizado === false
    ) {
      setStatusSolicitation('Disponível');
    }
  }, [information]);

  return (
    <Container>
      <section>
        <h3>Solicitação - {statusSolicitation}</h3>
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
        {!!information?.nome && (
          <>
            <hr className="divider" />
            <div className="occupation">
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
          </>
        )}
      </section>
    </Container>
  );
};

export default VisualizarSolicitacao;
