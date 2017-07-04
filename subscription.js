function updateState(previousState, action) {
  if (action.type === 'INCREMENT') {
    return previousState + action.amount;
  } else if (action.type === 'DECREMENT') {
    return previousState - action.amount;
  }

  return previousState;
}

class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callbacks = [];
  }

  getState() {
    return this._state;
  }

  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  }

  subscribe(callback) {
    // First call - subscribe
    this._callbacks.push(callback);
    // Second call - unsubscribe
    return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
  }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

// Subscribe
const unsubscribe = store.subscribe(() => console.log('State changed', store.getState()));

store.update(incrementAction);
// Unsubscribe
unsubscribe();
store.update(decrementAction);
store.update({});

