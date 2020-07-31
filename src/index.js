import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {applyMiddleware} from "redux";
import * as fromReduxThunk from 'redux-thunk';



import './index.css';
import '././assets/styles/global.scss';
import '././assets/styles/custom.scss';
import './plugins/fontawesome';
import App from './App';
import reducer from './reducers/canvasReducer';


const store = createStore(reducer, applyMiddleware(fromReduxThunk.default));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

