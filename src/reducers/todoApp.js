import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  GET_TODOS,
} from '../actions/actionTypes';

function todoReducer(state = {}, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;

    case EDIT_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;

    default:
      return state;
  }
}

export default function reducerApp(state = [], action) {
  switch (action.type) {
    case GET_TODOS: {
      return action.todos;
    }

    case ADD_TODO: {
      return [...state, action.todo];
    }

    case DELETE_TODO: {
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    case TOGGLE_TODO: {
      return state.map(todo => todoReducer(todo, action));
    }

    case EDIT_TODO: {
      return state.map(todo => todoReducer(todo, action));
    }

    default:
      return state;
  }
}

// Selector function
export function getFilteredTodos(todos, filter) {
  switch (filter) {
    case 'COMPLETED':
      return todos.filter(todo => todo.completed);

    case 'UNCOMPLETED':
      return todos.filter(todo => !todo.completed);

    default:
      return todos;
  }
}
