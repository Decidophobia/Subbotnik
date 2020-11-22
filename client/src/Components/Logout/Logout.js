import React from 'react';

export const Logout = () => {

	const logoutClick = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
	};

	return (
		<>
			<button onClick={ logoutClick }>Logout</button>
		</>
	);
};
