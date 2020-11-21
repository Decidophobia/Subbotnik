import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchLoginUserAC} from '../../redux/actionCreators';
import styles from './Login.module.css'
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
    <div className={styles.loginBox}>
		<form onSubmit={ handleSubmit }>
			<h1>Login</h1>

			<label>Email</label>
			<input
      className={styles.mainInput}
				type='email'
				ref={email}
				placeholder='Username'
			/><br/>

			<label>Password</label>
			<input
            className={styles.mainInput}

				ref={password}
				type='password'
				name='password'
				placeholder='Password'
			/><br/>
			<button className={styles.registrationBtn} type="submit">Вход</button>
		</form>
    </div>
	);
};
