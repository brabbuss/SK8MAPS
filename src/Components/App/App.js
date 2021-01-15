import React, { useEffect, useState } from "react";
import "./App.css";
import { getFromLocal, saveToLocal } from "../Common/Utilities/localStorage";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import SpotDetails from "../SpotDetails/SpotDetails";
import NavBar from "../Common/NavBar/NavBar";

function App() {
  const [selectedSpot, setSelectedSpot] = useState(getFromLocal("SELECTED-SK8MAP"));
  const [storedSpots, setStoredSpots] = useState(getFromLocal("USER-SK8MAPS"));

  useEffect(() => {
    console.log("useEffect APP");
  }, []);

  const updateSelection = spot => {
    setSelectedSpot(spot);
    saveToLocal("SELECTED-SK8MAP", spot);
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
                <SpotDetails
                  updateSelection={setSelectedSpot}
                  storedSpots={storedSpots}
                  selectedSpot={selectedSpot}
                  {...props}
                />
                // <SpotDetails syncSelectedSpot={syncSelectedSpot} selectedSpot={selectedSpot} {...props} />
              );
            }}
          />
          <Route
            path="/search"
            render={props => {
              return (
                <FindSpotView
                  updateSelection={updateSelection}
                  skateSpots={storedSpots}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/add"
            render={props => {
              return (
                <AddSpotView
                  updateSelection={updateSelection}
                  skateSpots={storedSpots}
                  {...props}
                />
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
