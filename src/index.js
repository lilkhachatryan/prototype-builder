import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import '././assets/styles/global.scss';
import '././assets/styles/custom.scss';
import './plugins/fontawesome';
import App from './App';
import reducer from './reducers/canvasReducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

