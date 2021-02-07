import * as ActionTypes from "./ActionTypes";

export const fetchTodos = () => ({
  type: ActionTypes.GET_TODOS,
});

export const addTodo = (todo) => ({
  type: ActionTypes.ADD_TODO,
  payload: todo,
});
export const deleteTodo = (todoId) => ({
  type: ActionTypes.DELETE_TODO,
  payload: todoId,
});
