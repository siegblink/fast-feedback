import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';
import theme from '../styles/theme';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
