import React, {useState} from 'react'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import SpotDetails from '../SpotDetails/SpotDetails'
import {skateSpots} from '../../sk8SpotData'
import NavBar from '../Common/NavBar/NavBar'
function App() {

  const [selectedSpot, setSelectedSpot] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Switch>
          <Route path="/spots/:spot_id">
            <SpotDetails selectedSpot={selectedSpot} />
          </Route>
          <Route path="/search">
            <FindSpotView setSelectedSpot={setSelectedSpot} skateSpots={skateSpots} />
          </Route>
          <Route path="/add">
            <AddSpotView skateSpots={skateSpots} />
          </Route>
          <Route path="/"> 
            <div>
              <h1>Find some skate spots or add one</h1>
            </div>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
