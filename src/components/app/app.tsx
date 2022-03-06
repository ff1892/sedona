import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './app.styled';
import { appTheme } from '../../theme';
import { MainPage } from '../components';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />}/>
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
