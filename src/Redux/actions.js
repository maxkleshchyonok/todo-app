import actions from "./action-types";

export function addTodo(todo) {
  return {
    type: actions.ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(id) {
  return {
    type: actions.DELETE_TODO,
    payload: id,
  };
}

export function toggleComplete(id) {
  return {
    type: actions.TOGGLE_COMPLETE,
    payload: id,
  };
}

export function editTodo(id, newName) {
  return {
    type: actions.EDIT_TODO,
    payload: { id, newName },
  };
}

export function changeFilter(filterName) {
  return {
    type: actions.CHANGE_FILTER,
    payload: filterName,
  };
}
