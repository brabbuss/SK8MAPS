import React from "react";
import "./FindSpotView.css";
import Map from "../Common/Map/Map";

function FindSpotView({ skateSpots, setSelectedSpot }) {

  return (
    <section className="fs-container">
      <h2>Find some spots</h2>
      <div className="fs-sort-container">
        <nav className="fs-navbar">NAVBAR</nav>
        <ul className="fs-ul">
          <li className="fs-">rails</li>
          <li className="fs-">curbs</li>
          <li className="fs-">flats</li>
          <li className="fs-">stairs</li>
          <li className="fs-">hills</li>
          <li className="fs-">parks</li>
        </ul>
      </div>
      <div className="map-container">
        <Map setSelectedSpot={setSelectedSpot} skateSpots={skateSpots} />
      </div>
    </section>
  );
}

export default React.memo(FindSpotView);
