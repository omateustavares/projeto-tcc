import React, { useCallback, useState } from 'react';

import Button from '../../components/Button';

import { Container, FallBackCotainer } from './styles';
import { useEffect } from 'react';
import api from '../../services/api';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import { useToast } from 'hooks/toast';
import getStatusSolicitacao from 'utils/getStatusSolicitation';
import { useAuth } from 'hooks/Auth';

interface Solicitation {
  id: string;
  nome_escola: string;
  status: string;
  status_finalizado: any;
}
interface SolicitationFormated extends Solicitation {
  statusFormat: any;
}

const Solicitacoes: React.FC = () => {
  const [solicitations, setSolicitations] = useState<SolicitationFormated[]>(
    [],
  );
  const [solicitationsAccepeted, setSolicitationsAccepeted] = useState<
    SolicitationFormated[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const { role } = useAuth();

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    const load = async () => {
      if (role === 'CRAS') {
        await api
          .get<Solicitation[]>('/solicitacaoEspecialista/listOpen')
          .then(response => {
            const data = response.data.map(solicitacao => ({
              ...solicitacao,
              statusFormat: getStatusSolicitacao(
                solicitacao.status,
                solicitacao.status_finalizado,
              ),
            }));

            setSolicitations(data);
            setIsLoading(false);
          });
        await api
          .get<Solicitation[]>('/solicitacaoEspecialista/listAccept')
          .then(response => {
            const data = response.data.map(solicitacao => ({
              ...solicitacao,
              statusFormat: getStatusSolicitacao(
                solicitacao.status,
                solicitacao.status_finalizado,
              ),
            }));

            setSolicitationsAccepeted(data);
            setIsLoading(false);
          });
      } else {
        await api
          .get<Solicitation[]>('/solicitacaoAdministracao/list')
          .then(response => {
            const data = response.data.map(solicitacao => ({
              ...solicitacao,
              statusFormat: getStatusSolicitacao(
                solicitacao.status,
                solicitacao.status_finalizado,
              ),
            }));

            setSolicitations(data);
            setIsLoading(false);
          });
      }
    };

    load();
  }, [role, setSolicitations]);

  const handleDeleteSolicitation = useCallback(
    async id => {
      try {
        await api.delete(`/solicitacaoAdministracao/delete/${id}`);

        setSolicitations(solicitations =>
          solicitations.filter(item => item.id !== id),
        );

        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Solicitação deletada com sucesso.',
        });
      } catch (error) {
        addToast({
          type: 'info',
          title: 'Atenção',
          description: `${error.response.data.message}`,
        });
      }
    },
    [addToast],
  );

  const handleViewerSolicitation = useCallback(
    async id => {
      history.push(`/visualizar-solicitacao/${id}`);
    },
    [history],
  );

  const handleNewSolicitaion = () => {
    history.push('/nova-solicitacao');
  };

  return (
    <Container>
      <section>
        <h2>Solicitações</h2>

        <table>
          <thead>
            <tr>
              <th>STATUS</th>
              <th>ESCOLA</th>
              <th>
                <div>
                  {role !== 'CRAS' && (
                    <Button onClick={handleNewSolicitaion} buttonStyle="blue">
                      NOVA SOLICITAÇÃO
                    </Button>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tr className="separator" />
          <tbody>
            {isLoading && (
              <FallBackCotainer>
                <Loader color="#5965E0" type="Grid" width={70} height={70} />
              </FallBackCotainer>
            )}

            {!isLoading && (
              <>
                {solicitations.map(solicitation => (
                  <tr key={solicitation.id}>
                    <th>{solicitation.statusFormat}</th>
                    <th>
                      <div>
                        <strong>{solicitation.nome_escola}</strong>
                      </div>
                    </th>
                    <th>
                      <div>
                        <Button
                          buttonStyle="blue"
                          onClick={() => {
                            handleViewerSolicitation(solicitation.id);
                          }}
                          // disabled={solicitation.statusFormat === 'Encerrado'}
                        >
                          ABRIR
                        </Button>
                      </div>
                      <div>
                        {role !== 'CRAS' && (
                          <Button
                            buttonStyle="red"
                            onClick={() => {
                              handleDeleteSolicitation(solicitation.id);
                            }}
                          >
                            ENCERRAR
                          </Button>
                        )}
                      </div>
                    </th>
                  </tr>
                ))}

                {solicitationsAccepeted.map(solicitation => (
                  <tr key={solicitation.id}>
                    <th>{solicitation.statusFormat}</th>
                    <th>
                      <div>
                        <strong>{solicitation.nome_escola}</strong>
                      </div>
                    </th>
                    <th>
                      <div>
                        <Button
                          buttonStyle="blue"
                          onClick={() => {
                            handleViewerSolicitation(solicitation.id);
                          }}
                        >
                          ABRIR
                        </Button>
                      </div>
                      <div>
                        {role !== 'CRAS' && (
                          <Button
                            buttonStyle="red"
                            onClick={() => {
                              handleDeleteSolicitation(solicitation.id);
                            }}
                            disabled={solicitation.statusFormat === 'Encerrado'}
                          >
                            ENCERRAR
                          </Button>
                        )}
                      </div>
                    </th>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </section>
    </Container>
  );
};

export default Solicitacoes;
