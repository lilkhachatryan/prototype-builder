import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router} from "react-router-dom";



import './index.css';
import '././assets/styles/global.scss';
import './plugins/fontawesome';
import App from './App';
import reducer from './reducers/canvasReducer';





const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
      <App />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

