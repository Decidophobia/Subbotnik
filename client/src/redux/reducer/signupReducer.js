import {ADD_USER} from '../actionTypes';

export function signupReducer(state = null, action) {
	switch (action.type) {
		case ADD_USER:
			return action.payload;
		default:
			return state;
	}
}

