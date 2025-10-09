import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import '../css/main.css';
import '../css/responsive.css';
import '../css/about.css';
import '../css/approach.css';
import '../css/contact.css';
import '../css/solutions.css';
import '../css/thank-you.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);