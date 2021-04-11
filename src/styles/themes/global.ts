import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #1F2229;
    --background2: #2E303C;
    --background-button: #373945;
    --background-button2: #4B4D59;
    --yellow: #FAE800;
    --gray: #BEC2C6;
    --white: #FBFBFB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
