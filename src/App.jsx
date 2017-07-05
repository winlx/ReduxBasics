import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';


const initialState = { count: 0 };

function reducer(previousState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: previousState.count + action.amount };
    case 'DECREMENT':
      return { count: previousState.count - action.amount };
    case 'RESET':
      return { count: 0 };
    default:
      return previousState;
  }
}

function increment(amount) {
  return { type: 'INCREMENT', amount };
}

function decrement(amount) {
  return { type: 'DECREMENT', amount };
}

function reset() {
  return { type: 'RESET' };
}

const store = createStore(reducer, initialState);

class App extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    let amount = parseInt(this.amount.value || 1, 10);
    store.dispatch(increment(amount));
  }

  decrement() {
    let amount = parseInt(this.amount.value || 1, 10);
    store.dispatch(decrement(amount));
  }

  reset() {
    store.dispatch(reset());
  }

  render() {
    const count = store.getState().count;

    return (
      <div className="counter">
        <span className="count">{count}</span>

        <div className="buttons">
          <button className="decrement" onClick={this.decrement}>-</button>
          <button className="reset" onClick={this.reset}>R</button>
          <button className="increment" onClick={this.increment}>+</button>
        </div>

        <input type="text" ref={(input) => { this.amount = input; }} defaultValue={1} />
      </div>
    );
  }
}

export default App;
