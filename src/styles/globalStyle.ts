import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #0185FF;
    color: #333;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }

  h1, h2, h3{
    font-size: 1.5em;
  }

  #root{
    margin: 0 auto;
    max-width: 1110px;
  }
`;
