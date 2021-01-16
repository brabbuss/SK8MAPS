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
    case "SYNC_DATA":
      const userMaps = getFromLocal("USER-SK8MAPS")
      const allMaps = getFromLocal("ALL-SK8MAPS")
      return { ...state, storedSpots: allMaps, userMaps: userMaps };
    case "UPDATE_SELECTED_SPOT":
      const selectedSpot = action.selectedSpot;
      saveToLocal("SELECTED-SK8MAP", selectedSpot);
      return { ...state, selectedSpot: selectedSpot };
    case "CHANGE_VIEW":
      const currentView = action.view;
      return { ...state, appView: currentView };
    case "ADD_CONFIRMATION_MARKER":
      const marker = action.marker;
      return { ...state, marker: marker };
    case "CREATE_SK8MAP":
      const newSk8Map = action.newSk8Map
      return { ...state, newSk8Map: newSk8Map };
    case "SAVE_NEW_SK8MAP":
      const newUserSk8Map = action.newSk8Map
      const updatedSk8Maps = [...state.storedSpots, newUserSk8Map]
      saveToLocal("ALL-SK8MAPS", updatedSk8Maps)
      saveToLocal("USER-SK8MAPS", updatedSk8Maps)
      return { ...state, storedSpots: updatedSk8Maps };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(myReducer, {selectedSpot: getFromLocal("SELECTED-SK8MAP"), storedSpots: getFromLocal("ALL-SK8MAPS")});

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
