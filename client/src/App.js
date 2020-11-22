import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import MapPage from "./Components/Map/Map";
import { YMaps } from "react-yandex-maps";
import District from "./Components/District/District";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat room={"room1"} />
        </Route>
        <Route path="/chat2">
          <Chat room={"room2"} />
        </Route>
        <Route path="/map">
          <YMaps
            query={{
              ns: "use-load-option",
              load:
                "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            }}
          >
            <MapPage />
          </YMaps>
        </Route>
        <Route path="/district">
          <District />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
