import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LocaleProvider } from './store/localeStore'

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
