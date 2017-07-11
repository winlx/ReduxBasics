import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PropTypes from 'prop-types';

import './index.css';

import reducer from './reducers/todoApp';
import todos from './todos';
import App from './App';

const store = createStore(reducer, todos);

// Context API component
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
