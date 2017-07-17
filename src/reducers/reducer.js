import { combineReducers } from 'redux';

import reducerApp, * as todoApp from './todoApp';
import reducerFilter from './filter';
import reducerFetching from './fetching';

const reducer = combineReducers({
  todos: reducerApp,
  filter: reducerFilter,
  fetching: reducerFetching,
});

export default reducer;

export function getFilteredTodos(state) {
  return todoApp.getFilteredTodos(state.todos, state.filter);
}
