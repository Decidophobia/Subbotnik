import {combineReducers} from 'redux';
import {signupReducer} from './signupReducer';
import {loginReducer} from './loginReducer';


export const rootReducer = combineReducers({
	signup: signupReducer,
	login: loginReducer,
});
