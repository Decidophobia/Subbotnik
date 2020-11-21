import {ADD_USER, LOGIN_USER, SEND_MESSAGE} from './actionTypes';

// add user
export const fetchAddUserAC = (payload) => {
	return (dispatch) => {
		fetch('/auth/signup', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then(res => res.json())
			.then(result => {
				dispatch(addUserAC({result}));
				localStorage.setItem('token', JSON.stringify(result.token));
			});
	};
};

export const addUserAC = (payload) => ({
	type: ADD_USER,
	payload
});

// login
export const fetchLoginUserAC = (payload) => {
	return (dispatch) => {
		fetch('/auth/login', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then(res => res.json())
			.then(result => {
				dispatch(loginUserAC({result}));
				localStorage.setItem('token', JSON.stringify(result.token));
			});
	};
};

export const loginUserAC = (payload) => ({
	type: LOGIN_USER,
	payload
});

// profile
export const fetchToProfileAC = () => {
	return () => {
		const token = localStorage.token;
		if (token) {
			const regexp = new RegExp(/\"/gm);
			fetch('/auth/profile', {
				method: 'GET',
				headers: {
					// 'Content-type': 'application/json',
					'Accept': '*/*',
					'Authorization': token.replace(regexp, '')
				}
			})
				.then(res => res.json())
				.then(result => console.log(result.token));
		} else {
			console.log('token not found');
		}

	};
};


export const sendMessageAC = (payload) => ({
	type: SEND_MESSAGE,
	payload
});

