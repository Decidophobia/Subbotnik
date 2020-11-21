import {LOGIN_USER} from '../actionTypes';

export function loginReducer(state = null, action) {
	switch (action.type) {
		case LOGIN_USER:
			return action.payload;
		default:
			return state;
	}

}
