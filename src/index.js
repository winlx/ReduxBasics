import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import reducer from './reducers/todoApp';
import todos from './todos';
import App from './App';

const store = createStore(reducer, todos);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
