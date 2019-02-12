import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import CardsContainer from './containers/CardsContainer';

const theme = {
  black: '#393939'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
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
    color: ${theme.black};
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div>
            <CardsContainer />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
