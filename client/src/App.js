import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';
import {Signup} from './Components/Signup/Signup';
import {Login} from './Components/Login/Login';

function App() {

	return (
		<>
			<Navbar/>
			<Switch>
				<Route exact path="/">
					<AboutUs/>
				</Route>
				<Route path='/Signup'>
					<Signup/>
				</Route>
				<Route path='/Login'>
					<Login/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
