import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import Router from './routes/Router';
import { GlobalStyle } from './styles/globalStyle';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './recoil/atoms';

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
