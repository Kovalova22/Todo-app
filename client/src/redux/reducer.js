import * as ActionTypes from './ActionTypes';

const todos = [];

const reducer = (state=todos, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat([action.data]);
        case ActionTypes.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        default: 
        return state;
    }
}
export default reducer;