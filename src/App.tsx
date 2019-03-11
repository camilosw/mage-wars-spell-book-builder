import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import CardsContainer from './containers/CardsContainer';
import FilterContext, { useFilter } from './helpers/filter';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './styles/styled-components';
import theme from './styles/theme';

const App: React.FC<{}> = () => {
  const [filter, setFilter] = useFilter();
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <FilterContext.Provider value={[filter, setFilter]}>
          <div>
            <LeftSidebar />
            <CardsContainer />
          </div>
        </FilterContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
