import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Data from './Data';

export default history => combineReducers({
    router: connectRouter(history),
    Data,
});
