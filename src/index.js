import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import {ThemeProvider} from '@emotion/react';
import {HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <HashRouter>
      <ThemeProvider theme={theme} >
          <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();