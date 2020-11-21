import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Signup } from './Components/Signup/Signup';
import { Login } from './Components/Login/Login';
import Chat from './Components/Chat/Chat';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MapPage from './Components/Map/Map';
import { YMaps } from 'react-yandex-maps';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/map">
          <YMaps
            query={{
              ns: 'use-load-option',
              load:
                'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
            }}
          >
            <MapPage />
          </YMaps>
        </Route>
      </Switch>
    </>
  );
}

export default App;
