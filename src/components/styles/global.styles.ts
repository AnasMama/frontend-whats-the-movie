import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    text-align: center;
    --main-blue: #1B1E22;
    --main-pink: #ef626c;
    --main-yellow: #FABC2A;
  }
  
  body {
    font-weight: bold;
    background-image: url('/src/assets/background-movie.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    margin: 0;
    padding: 0;
    color: #FFFFFF;

    h1 {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      background-position: 12% 100%;
    }

    a:link, a:visited {
      text-decoration: none;
      color: white;
      width: 100%;
    }
  }


`;

export default GlobalStyle;
