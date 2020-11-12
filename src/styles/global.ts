import { createGlobalStyle } from 'styled-components';

import githubBackgroundImg from '../assets/github-background.svg';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    overflow-x: hidden;
    background: url(${githubBackgroundImg}) no-repeat 70% top;
    background-color: #f0f0f5;
  }

  #root {
    max-width: 100rem;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
