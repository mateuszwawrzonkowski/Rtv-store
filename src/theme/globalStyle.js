import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding: 0;
}


html{
    font-size: 62.5%;
   
}

body{
    font-size: 1.6rem;
    background-color: #F6F6F9;
}

a{
    word-wrap: break-all;
}
`;

export default GlobalStyle;
