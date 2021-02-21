import * as ActionTypes from './ActionTypes';

const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_TODOS_ASYNC:
      return {
        ...state,
        todos: action.payload,
      };
    case ActionTypes.ADD_TODO_ASYNC:
      return {
        ...state,
        todos: state.todos.concat([action.payload]),
      };
    case ActionTypes.DELETE_TODO_ASYNC:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
