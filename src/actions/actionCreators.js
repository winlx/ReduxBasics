import axios from 'axios';

import {
  EDIT_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  GET_TODOS,
  REQUEST_TODOS,
} from './actionTypes';

export function getTodos() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_TODOS,
    });

    return axios.get('api/todos')
      .then(response => dispatch({
        type: GET_TODOS,
        todos: response.data,
      }));
  };
}

export function addTodo(title) {
  return axios.post('api/todos', { title })
    .then(response => ({
      type: ADD_TODO,
      todo: response.data,
    }));
}

export function deleteTodo(id) {
  return axios.delete(`api/todos/${id}`)
    .then(response => ({
      type: DELETE_TODO,
      id,
    }));
}

export function toggleTodo(id) {
  return axios.patch(`api/todos/${id}`)
    .then(response => ({
      type: TOGGLE_TODO,
      todo: response.data,
    }));
}

export function editTodo(id, title) {
  return axios.put(`api/todos/${id}`, { title })
    .then(response => ({
      type: EDIT_TODO,
      todo: response.data,
    }));
}
