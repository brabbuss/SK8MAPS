import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import SpotDetails from "../SpotDetails/SpotDetails";
import { skateSpots } from "../../sk8SpotData";
import NavBar from "../Common/NavBar/NavBar";

function App() {
  const [selectedSpot, setSelectedSpot] = useState(null);

  const updateSelection = spot => {
    setSelectedSpot(spot);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route
            path="/spots/:spot_id"
            render={props => {
              return (
                <SpotDetails updateSelection={updateSelection} {...props} />
              );
            }}
          />
          <Route
            path="/search"
            render={props => {
              return (
                <FindSpotView updateSelection={updateSelection} skateSpots={skateSpots} {...props} />
              );
            }}
          />
          <Route path="/add"
            render={props => {
              return(
                <AddSpotView updateSelection={updateSelection} skateSpots={skateSpots} {...props}/>  
              );
            }}
          />
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
