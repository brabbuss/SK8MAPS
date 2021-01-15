import React, { useState, useReducer } from "react";
import "./App.css";
import AppContext from "./AppContext";
import { getFromLocal, saveToLocal } from "../Common/Utilities/localStorage";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import SpotDetails from "../SpotDetails/SpotDetails";
import NavBar from "../Common/NavBar/NavBar";
import DetailsForm from '../DetailsForm/DetailsForm'

export const myReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_SPOT":
      const currentSpot = action.spot;
      saveToLocal("SELECTED-SK8MAP", currentSpot);
      return { ...state, selectedSpot: currentSpot };
    case "CHANGE_VIEW":
      const currentView = action.view;
      return { ...state, appView: currentView };
    default:
      return state;
  }
};

function App() {
  const [selectedSpot, setSelectedSpot] = useState(getFromLocal("SELECTED-SK8MAP"));
  const [storedSpots, setStoredSpots] = useState(getFromLocal("USER-SK8MAPS"));
  const [state, dispatch] = useReducer(myReducer, {selectedSpot, storedSpots});

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route path="/spots/:spot_id" component={SpotDetails} />
            <Route path='/add/details' component={DetailsForm}/>
            <Route path="/search" component={FindSpotView} />
            <Route path="/add" component={AddSpotView} />
            <Route path="/">
              <div>
                <h1>Find some skate spots or add one</h1>
              </div>
            </Route>
          </Switch>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
