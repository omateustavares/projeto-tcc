import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: auto;
  max-width: 700px;

  height: 70vh;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  text-align: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: left;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: var(--blue-one);
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: ${shade(0.2, '#5965E0')};
      }
    }
  }

  > a {
    color: var(--blue-one);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#5965E0')};
    }
  }
`;
