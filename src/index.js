import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '././assets/styles/global.scss';
import '././assets/styles/custom.scss';
import './plugins/fontawesome';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

