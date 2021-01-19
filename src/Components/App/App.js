import React, { useReducer } from "react";
import "./App.css";
import AppContext from "./AppContext";
import { getFromLocal } from "../Common/Utilities/localStorage";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotsView";
import SpotDetails from "../SpotDetails/SpotDetails";
import NavBar from "../Common/NavBar/NavBar";
import DetailsForm from '../DetailsForm/DetailsForm'
import {myReducer} from '../Common/Utilities/myReducer'

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
