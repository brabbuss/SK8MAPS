import React from "react";
import "./FindSpotView.css";
import Map from "../Common/Map/Map";

function FindSpotView({ skateSpots, updateSelection }) {

  return (
    <section className="fs-container">
      <h2>Find spots by:</h2>
      <div className="fs-sort-container">
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
        <Map updateSelection={updateSelection} skateSpots={skateSpots} />
      </div>
    </section>
  );
}

export default React.memo(FindSpotView);
