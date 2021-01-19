import React, { useState } from "react";
import "./App.css";
import { getFromLocal, saveToLocal } from "../Common/Utilities/localStorage";
import { Switch, Route, Link } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotsView";
import SpotDetails from "../SpotDetails/SpotDetails";
import NavBar from "../Common/NavBar/NavBar";
import DetailsForm from '../DetailsForm/DetailsForm'

function App() {
  const [newSk8Map, setNewSk8Map] = useState(null)
  const [storedSpots, setStoredSpots] = useState(getFromLocal("ALL-SK8MAPS"))
  const [selectedSpot, setSelectedSpot] = useState(getFromLocal("SELECTED-SK8MAP"))
  const [matchedMap, setMatchedMap] = useState(null)
    
  const saveNewMapToStoredMaps = async (completeSk8Map) => {
    const updatedSk8Maps = [...storedSpots, completeSk8Map]
    await saveToLocal("ALL-SK8MAPS", updatedSk8Maps)
    await saveToLocal("USER-SK8MAPS", updatedSk8Maps)
    setNewSk8Map(null)
    setStoredSpots(await getFromLocal("ALL-SK8MAPS"))
    setMatchedMap(completeSk8Map)
  }

  return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route 
              path='/spots/:spot_id' 
              render={props => <SpotDetails 
                matchedMap={matchedMap}
                setMatchedMap={setMatchedMap}
                allSk8Maps={storedSpots}
                {...props}
              />}
            />
            <Route 
              path='/add/details' 
              render={props => <DetailsForm 
                newSk8Map={newSk8Map}
                selectedSpot={selectedSpot}
                saveNewSk8Map={saveNewMapToStoredMaps}
                {...props}
              />}
            />
            <Route 
              path='/search' 
              render={props => <FindSpotView 
                allSk8Maps={storedSpots}
                selectedSpot={selectedSpot}
                updateSelection={setSelectedSpot}
                {...props}
              />}
            />
            <Route 
              path='/add' 
              render={props => <AddSpotView 
                allSk8Maps={storedSpots}
                createNewSk8Map={setNewSk8Map}
                selectedSpot={selectedSpot}
                updateSelection={setSelectedSpot}
                {...props}
              />}
            />
            <Route path="/">
              <div className='welcome-container'>
                <h1>Welcome to <b>SK8MAPS</b>!</h1>
                <br/>
                <p>click <Link to='/search' className='nav-button home-link'>search</Link> to find some spots</p>
                <p>click <Link to='/add' className='nav-button home-link'>Add a SK8MAP</Link> to add a new spot</p>
              </div>
            </Route>
          </Switch>
        </header>
      </div>
  );
}

export default App;
