import {ADD_USER, LOGIN_USER, SEND_MESSAGE, ADD_POLLUTION} from './actionTypes';

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
				localStorage.setItem('name', JSON.stringify(result.name));
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
				localStorage.setItem('name', JSON.stringify(result.name));
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


// add pollution

export const fetchAddPollutionAC = (payload) => {

	console.log(payload);
	return (dispatch) => {
		fetch('/pollution', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(payload),
		})
			.then(res => res.json())
			.then(data => console.log(data));
	};
};

export const addPollutionAC = (payload) => ({
	type: ADD_POLLUTION,
	payload
});


export const sendMessageAC = (payload) => ({
	type: SEND_MESSAGE,
	payload
});


