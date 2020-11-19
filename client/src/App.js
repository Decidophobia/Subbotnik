import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
