import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --main-color: #fac421;
    --white-color: #fff;
    --gray-color: #d8d8d8;
    --black-color: #242418;
    --border-color: #BFBFBF;
    --input-bg-color: #373737;
    --text-color: #484848;
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
    background: var(--black-color);
    width: 100%;

    svg {
      color: var(--main-color);
    }
  }
`;
