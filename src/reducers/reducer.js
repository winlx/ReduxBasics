import { combineReducers } from 'redux';

import reducerApp, * as todoApp from './todoApp';
import reducerFilter from './filter';

const reducer = combineReducers({
  todos: reducerApp,
  filter: reducerFilter,
});

export default reducer;

export function getFilteredTodos(state) {
  return todoApp.getFilteredTodos(state.todos, state.filter);
}
