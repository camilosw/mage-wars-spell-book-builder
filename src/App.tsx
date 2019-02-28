import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import CardsContainer from './containers/CardsContainer';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './styles/styled-components';
import theme from './styles/theme';

const FilterContext = React.createContext({});

const App: React.FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <FilterContext.Provider value={{}}>
        <div>
          <LeftSidebar />
          <CardsContainer />
        </div>
      </FilterContext.Provider>
    </>
  </ThemeProvider>
);

export default App;
