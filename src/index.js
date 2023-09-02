import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { Logo } from 'components/Logo/Logo';
import { Theme } from 'styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Logo />
      <App />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
