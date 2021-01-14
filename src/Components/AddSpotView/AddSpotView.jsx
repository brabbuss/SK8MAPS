import React from "react";
import Map from "../Common/Map/Map";

function AddSpotView({ skateSpots, updateSelection }) {

  return (
    <section>
      <h1>click to add a spot</h1>
      <Map updateSelection={updateSelection} skateSpots={skateSpots} />
    </section>
  ) 
}

export default React.memo(AddSpotView);