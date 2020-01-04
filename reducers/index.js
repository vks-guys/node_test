import { combineReducers } from 'redux';
import nameReducer from './name.reducers';
import ageReducer from './age.reducers';

export default combineReducers({
    nameReducer, ageReducer
});