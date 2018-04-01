import React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './Store';
import App from '../containers/App';

const Root = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route path="/" component={App} />
                </div>
            </ConnectedRouter>
        </Provider>
    );
};

export default hot(module)(Root);
