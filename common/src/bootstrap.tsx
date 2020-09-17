import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import App from './App';
import { theme } from './theme';

const appRoot = document.getElementById('app');

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  appRoot,
);
