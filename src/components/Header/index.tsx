import { useCallback } from 'react';
import fm from 'format-message';
import Button from '../Button';
import { useAuth } from 'hooks/Auth';
import { Container, Content } from './styles';
import { useHistory, useLocation } from 'react-router-dom';

export function Header() {
  const { user, signOut } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const namePath = location.pathname.replace(/\//g, '');

  const handleButton = useCallback(() => {
    if (namePath !== 'solicitacoes') {
      history.push('/solicitacoes');
    } else {
      signOut();
    }
  }, [namePath, history, signOut]);

  return (
    <>
      {user !== undefined && (
        <Container>
          <Content>
            <div>
              <Button
                buttonStyle="blue"
                type="submit"
                onClick={() => {
                  handleButton();
                }}
              >
                {namePath !== 'solicitacoes'
                  ? fm('screen.home.button.back')
                  : fm('screen.home.button.logout')}
              </Button>
            </div>
            <nav>
              <span>{user}</span>
            </nav>
          </Content>
        </Container>
      )}
    </>
  );
}
