let state = 0;

function updateState(previousState, action) {
  if (action === 'INCREMENT') {
    return previousState + 1;
  } else if (action === 'DECREMENT') {
    return previousState - 1;
  }

  return previousState;
}

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'NOTHING');
console.log(state);
