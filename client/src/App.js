import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </>
  );
}

export default App;
