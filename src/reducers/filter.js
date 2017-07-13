import { SET_FILTER } from '../actions/actionTypes';

export default function reducerFilter(state = 'ALL', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
