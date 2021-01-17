import React, { useReducer, useState } from "react";
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
import {saveToLocal} from '../Common/Utilities/localStorage'

function App() {
  const [state, dispatch] = useReducer(myReducer, {selectedSpot: getFromLocal("SELECTED-SK8MAP"), storedSpots: getFromLocal("ALL-SK8MAPS")});
  const [newSk8Map, setNewSk8Map] = useState(null)

  const saveNewMapToStoredMaps = (completeSk8Map) => {
    console.log(completeSk8Map);
    const updatedSk8Maps = [...state.storedSpots, completeSk8Map]
    saveToLocal("ALL-SK8MAPS", updatedSk8Maps)
    saveToLocal("USER-SK8MAPS", updatedSk8Maps)
    setNewSk8Map(null)
  }

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route path="/spots/:spot_id" component={SpotDetails} />
            {/* <Route path='/add/details' component={DetailsForm}/> */}
            <Route 
              path='/add/details' 
              render={props => <DetailsForm 
                newSk8Map={newSk8Map}
                saveNewSk8Map={saveNewMapToStoredMaps}
              />}
            />
            
            <Route path="/search" component={FindSpotView} />
            
            <Route 
              path='/add' 
              render={props => <AddSpotView 
                createNewSk8Map={setNewSk8Map}
              />}
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
