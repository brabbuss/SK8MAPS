import logo from "./logo.svg";
import "./App.css";
import Map from "./Map";

const skateSpots = [
  {
    title: 'Secrest Park', 
    location: {
      lat: 39.8155,
      lng:  -105.0726
    }
  },
  {
    title: "Scott's driveway", 
    location: {
      lat: 39.816,
      lng: -105.065
    }
  },
  {
    title: "Arvada SkatePark", 
    location: {
      lat: 39.82663239233444, 
      lng: -105.14309411715244
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Map
          skateSpots={skateSpots}
        />
      </header>
    </div>
  );
}

export default App;
