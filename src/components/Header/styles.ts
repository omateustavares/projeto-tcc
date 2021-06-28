import styled from 'styled-components';

export const Container = styled.div`
  height: 4rem;
  background-color: var(--white);
  padding: 0 6rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 4rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    button {
      height: 2.5rem;
      margin: 0;
    }
  }

  nav {
    span {
      color: var(--text);
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;
