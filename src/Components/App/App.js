import React, { useEffect, useState, useReducer } from "react";
import "./App.css";
import AppContext from './AppContext'
import { getFromLocal, saveToLocal } from "../Common/Utilities/localStorage";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import SpotDetails from "../SpotDetails/SpotDetails";
import NavBar from "../Common/NavBar/NavBar";

export const myReducer = (state, action) => {
  switch (action.type) {
    // case 'TOGGLE_THEME':
    //   const newTheme = state.theme === 'light' ? 'dark' : 'light';
    //   return {...state, theme: newTheme}
    // case 'ADD_IDEA':
    //   return {...state, ideas:[...state.ideas, action.idea]}
    case 'CHANGE_VIEW':
      const currentView = action.view;
      return {...state, appView: currentView}
    default:
      return state
  }
}

function App() {
  const [selectedSpot, setSelectedSpot] = useState(getFromLocal("SELECTED-SK8MAP"));
  const [storedSpots, setStoredSpots] = useState(getFromLocal("USER-SK8MAPS"));
  // const [appView, setAppView] = useState(null)
  const [state, dispatch] = useReducer(myReducer, {selectedSpot, storedSpots}) 

  useEffect(() => {
    console.log("useEffect APP");
  }, []);

  const updateSelection = spot => {
    setSelectedSpot(spot);
    saveToLocal("SELECTED-SK8MAP", spot);
  };

  return (
    <AppContext.Provider value={[state,dispatch]}>

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
    </AppContext.Provider>

  );
}

export default App;
