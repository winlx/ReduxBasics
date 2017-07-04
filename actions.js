let state = 0;

function updateState(previousState, action) {
  if (action.type === 'INCREMENT') {
    return previousState + action.amount;
  } else if (action.type === 'DECREMENT') {
    return previousState - action.amount;
  }

  return previousState;
}

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);
