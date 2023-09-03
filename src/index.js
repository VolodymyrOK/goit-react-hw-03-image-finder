import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { App } from 'components/App';
import { Logo } from 'components/Logo/Logo';
import { Theme } from 'styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Logo />
      <App />
      <Toaster />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
