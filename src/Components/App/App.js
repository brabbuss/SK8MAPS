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
  const [storedSpots, setStoredSpots] = useState(skateSpots)

  const updateSelection = spot => {
    setSelectedSpot(spot);
  };

  // const findSpotByID = (id) => {
  //   storedSpots
  // }

  const getSpotDetails = async id => {
    // await getMovieDetailsAPI(id).then(movie => checkBudgetInfo(movie)).then(movie =>
    //   this.setState({ selectedMovie: movie })

    // );
    // await getMovieVideoAPI(id).then(videos =>
    //   this.setState({ selectedMovieVideos: videos })
    // );
    // typeof this.state.selectedMovie === "number" // if movieDetails is a number, then it is an error code returned from API call!
    //   ? this.handleError(this.state.selectedMovie)
    //   : this.setState({ statusError: false });
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
                <SpotDetails updateSelection={updateSelection} selectedSpot={selectedSpot} {...props} />
              );
            }}
          />
          <Route
            path="/search"
            render={props => {
              return (
                <FindSpotView updateSelection={updateSelection} skateSpots={storedSpots} {...props} />
              );
            }}
          />
          <Route path="/add"
            render={props => {
              return(
                <AddSpotView updateSelection={updateSelection} skateSpots={storedSpots} {...props}/>  
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
