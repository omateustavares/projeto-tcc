import Button from '../Button';
import { useAuth } from 'hooks/Auth';
import { Container, Content } from './styles';
import { useHistory, useLocation } from 'react-router-dom';

export function Header() {
  const { user } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Container>
      <Content>
        <div>
          {pathname !== '/solicitacoes' && (
            <Button
              buttonStyle="blue"
              type="submit"
              onClick={() => {
                history.push('/solicitacoes');
              }}
            >
              Voltar
            </Button>
          )}
        </div>
        <nav>
          <span>{user}</span>
        </nav>
      </Content>
    </Container>
  );
}
