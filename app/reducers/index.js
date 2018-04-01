import { combineReducers } from 'redux';
import { routerReducer as Router } from 'react-router-redux';
import Data from './Data';

export default combineReducers({
    Router,
    Data,
});
