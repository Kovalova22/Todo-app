import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from './redux/rootReducer';
import rootWatcher from './sagas/saga';
import logger from 'redux-logger';

const middleware = createSagaMiddleware();

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(middleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
);

middleware.run(rootWatcher);

export default store;