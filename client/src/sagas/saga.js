import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { GET_TODOS, GET_TODOS_ASYNC, ADD_TODO, ADD_TODO_ASYNC, DELETE_TODO, DELETE_TODO_ASYNC } from '../redux/ActionTypes';
import { fetchTodos } from "./api";

export default function* rootWatcher() {
    yield takeEvery(GET_TODOS, fetchTodosAsync);
    yield takeEvery(ADD_TODO, addTodoAsync);
    yield takeEvery(DELETE_TODO, deleteTodoAsync);
  }
  export function* fetchTodosAsync() {
    let response = yield call(fetchTodos);
    yield put({ type: GET_TODOS_ASYNC, payload: response.data });
  }
  export function* addTodoAsync(action) {
    yield axios.post(`http://localhost:3000/api/todos`, {
      title: action.payload.title
    });
    yield put({ type: ADD_TODO_ASYNC, payload: action.payload });
}
export function* deleteTodoAsync(action) {
    axios.delete("http://localhost:3000/api/todos/" + action.payload);
    yield put({ type: DELETE_TODO_ASYNC, payload: action.payload });
  }