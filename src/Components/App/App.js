import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import {sk8Logo} from '../Common/logo'

const skateSpots = [
  {
    title: "Secrest Park",
    location: {
      lat: 39.8155,
      lng: -105.0726,
    },
  },
  {
    title: "Scott's driveway",
    location: {
      lat: 39.816,
      lng: -105.065,
    },
  },
  {
    title: "Arvada SkatePark",
    location: {
      lat: 39.82663239233444,
      lng: -105.14309411715244,
    },
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-title'>
          {sk8Logo}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Switch>
          <Route path="/find">
            <FindSpotView skateSpots={skateSpots} />
          </Route>
          <Route path="/add">
            <AddSpotView skateSpots={skateSpots} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
