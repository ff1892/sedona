import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './app.styled';
import { appTheme } from '../../theme';
import { MainPage, CatalogPage } from '../components';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
          <Routes>
            <Route path="/catalog" element={<MainPage />}/>
            <Route path="/" element={<CatalogPage />}/>
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
