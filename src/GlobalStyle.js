import {createGlobalStyle, ThemeProvider} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Open-Sans', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    
  }
`;


export default GlobalStyle;