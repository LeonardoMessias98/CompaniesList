import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: 'Inter',sans-serif;
  }

  html,
  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 1980px) {
    html {
      font-size: 81.25%;
    }
  }
  
  @media(max-width: 1680px) {
    html {
      font-size: 78.125%;
    }
  }

  @media(max-width: 1440px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 1360px) {
    html {
      font-size: 68.75%;
    }
  }

  @media(max-width: 1280px) {
    html {
      font-size: 62.5%;
    }
  }

  @media(max-width: 1024px) {
    html {
      font-size: 56.25%;
    }
  }
  
  @media(max-width: 960px) {
    html {
      font-size: 50%;
    }
  }
`;
export default GlobalStyle;
