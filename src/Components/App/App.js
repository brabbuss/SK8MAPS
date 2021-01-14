import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddSpotView from "../AddSpotView/AddSpotView";
import FindSpotView from "../FindSpotsView/FindSpotView";
import {sk8Logo} from '../Common/logo'
import {skateSpots} from '../../sk8SpotData'

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
