import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchLoginUserAC} from '../../redux/actionCreators';

export const Login = () => {

	const dispatch = useDispatch();
	const email = useRef();
	const password = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		const userLogin = {
			email: email.current.value,
			password: password.current.value,
		};

		dispatch(fetchLoginUserAC(userLogin));
	};

	return (
		<form onSubmit={ handleSubmit }>
			<h1>Login</h1>

			<label>Email</label>
			<input
				type='email'
				ref={email}
				placeholder='Username'
			/><br/>

			<label>Password</label>
			<input
				ref={password}
				type='password'
				name='password'
				placeholder='Password'
			/><br/>
			<button type="submit">SignUp</button>
		</form>
	);
};
