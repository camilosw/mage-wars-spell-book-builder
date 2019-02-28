import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    color: ${props => props.theme.grey900}
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.grey800};
  }
`;

export default GlobalStyle;
