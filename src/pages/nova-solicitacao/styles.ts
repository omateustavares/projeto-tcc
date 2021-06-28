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
    margin: 0 25px;
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: var(--title);
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .formSolicitation {
      &--email {
        width: 40%;
        margin-bottom: 2rem;
      }

      &--info {
        width: 82%;

        display: flex;
        flex-direction: row;
        margin-bottom: 2rem;

        div:last-child {
          margin-top: 0;
          margin-left: 1rem;
        }
      }
    }
  }

  @media (max-width: 800px) {
    margin: 0 10px;
    padding-left: 0px;
    overflow-x: scroll;
  }
`;
