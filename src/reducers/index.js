import {combineReducers} from 'redux';
import postReducer from './postReducer';
import userHeader from './userHeader';

export default combineReducers({
	posts: postReducer,
	users: userHeader
})