import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './app.styled';
import { appTheme } from '../../theme';
import { MainPage, CatalogPage } from '../components';
import { AppRoute } from '../constants';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
          <Routes>
            <Route path={AppRoute.Index} element={<MainPage />}/>
            <Route path={AppRoute.Catalog} element={<CatalogPage />}/>
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
