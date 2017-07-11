import { EDIT_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from './actionTypes';

let nextId = 5;

export function addTodo(title) {
  return {
    type: ADD_TODO,
    id: nextId++,
    title,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    id,
    title,
  };
}
