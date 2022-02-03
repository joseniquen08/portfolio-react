import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import { I18NextProvider } from './translations/I18NextProvider';

ReactDOM.render(
  <I18NextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18NextProvider>,
  document.getElementById('root')
);