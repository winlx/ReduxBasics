import { REQUEST_TODOS, GET_TODOS } from '../actions/actionTypes';

export default function reducerFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return true;

    case GET_TODOS:
      return false;

    default:
      return state;
  }
}
