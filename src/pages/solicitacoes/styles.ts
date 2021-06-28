import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 6rem 0;
  height: auto;

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
      margin-bottom: 40px;
    }

    table {
      border-spacing: 0 8px;
      border-radius: 5px;
      min-width: 650px;

      thead {
        text-align: left;
        font-style: 'Roboto';
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: var(--text);

        th:last-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          div {
            button {
              line-height: 16px;
              font-size: 14px;
              height: 40px;
              font-weight: 700;
              margin: 0;
            }
          }
        }
      }

      tbody {
        margin-top: 24px;
        background: var(--white);
        border-radius: 5px;

        tr {
          border-radius: 5px;

          th:first-child {
            padding: 0rem 1rem 0 1rem;
            border-right: 3px solid var(--background-body);
            font-weight: 500;
            font-size: 18px;
            color: var(--text);
          }

          th {
            margin-left: 5rem;
            font-weight: 500;
            font-size: 18px;
            color: var(--text);
            text-align: left;
            padding: 0.5rem;

            &:last-child {
              display: flex;
              justify-content: flex-end;
              align-items: center;

              > div {
                justify-content: space-between;
                display: flex;
                flex-direction: row;

                > button {
                  margin: 1rem 1rem 1rem 1rem;
                  height: 2.5rem;
                  font-size: 14px;
                  font-weight: 700;
                }
              }
            }
          }
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

export const FallBackCotainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
