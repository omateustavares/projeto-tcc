import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  :root {
    --background-body: #F2F3F5;
    --white: #ffffff;
    --blue-one: #5965E0;
    --blue-two: #4953b8;
    --red: #c53030;
    --red-button: #E83F5B;
    --text: #666666;
    --line: ##f2f2f2;
    --title: #2E384D;
  }


  body {
    background: var(--background-body);
    color: #FFF;
    -webkit-box-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
