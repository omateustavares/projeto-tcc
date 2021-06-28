import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--background-body);
  section {
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: var(--title);
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .divider {
    width: 100%;
    border-bottom: 1px solid var(--line);
    margin: 1rem 0;
  }

  .information {
    margin: 1rem;
    label {
      color: var(--text);
      font-weight: 600;
      margin-left: 0.5rem;
    }

    div {
      background: var(--white);
      border-radius: 5px;
      padding: 16px;
      width: auto;
      color: #232129;
      margin-top: 0.5rem;

      display: flex;
      align-items: center;
      span {
        color: var(--text);
      }
    }
  }

  .student {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 800px) {
    margin: 0 10px;
    padding-left: 0px;
    overflow-x: scroll;
  }
`;
