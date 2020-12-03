import * as React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import { Global, css } from '@emotion/react';
import customTheme from '@/styles/theme';
import '@/styles/globals.css';

const GlobalStyle = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      >
        {children}
      </Global>
    </React.Fragment>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
