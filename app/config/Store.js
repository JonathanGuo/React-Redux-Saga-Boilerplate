import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createRootReducer from '../reducers';

// Create a history
const history = createBrowserHistory();

// Create middlewares
const sagaMiddleware = typeof createSagaMiddleware === 'function'
    ? createSagaMiddleware()
    : createSagaMiddleware.default();
const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

// Create store
const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(...middlewares),
    ),
);

sagaMiddleware.run(rootSaga);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        store.replaceReducer(createRootReducer(history));
    });
}

const action = (type, payload) => store.dispatch({ type, payload });

// Export history and store
export { history, store, action };
