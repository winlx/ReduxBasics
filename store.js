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
  }

  getState() {
    return this._state;
  }

  update(action) {
    this._state = this._updateState(this._state, action);
  }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

store.update(incrementAction);
console.log(store.getState());

store.update(decrementAction);
console.log(store.getState());

store.update({});
console.log(store.getState());
