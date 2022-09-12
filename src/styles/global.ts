import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --main-color: #0F52BA;
    --white-color: #fff;
    --gray-color: #eee;
    --black-color: #000;
    --border-color: #BFBFBF;
    --input-bg-color: #373737;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  .react-toastfy-container {
    width: 25%;

    @media (max-width: 1080px) {
      width: 100%;
    }
  }

  .react-toastfy-content {
    font: 500 1rem "Montserrat", sans-serif;
    background: var(--white-color);
    width: 100%;

    svg {
      color: var(--main-color);
    }
  }
`;
