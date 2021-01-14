import React, {useState} from 'react'
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import SpotDetails from '../SpotDetails/SpotDetails'
import {sk8Logo} from '../Common/logo'
import {skateSpots} from '../../sk8SpotData'

function App() {

  const [selectedSpot, setSelectedSpot] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-title'>
          {sk8Logo}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Switch>
          <Route path="/spots/:spot_id">
            <SpotDetails selectedSpot={selectedSpot} />
          </Route>
          <Route path="/find">
            <FindSpotView setSelectedSpot={setSelectedSpot} skateSpots={skateSpots} />
          </Route>
          <Route path="/add">
            <AddSpotView skateSpots={skateSpots} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
