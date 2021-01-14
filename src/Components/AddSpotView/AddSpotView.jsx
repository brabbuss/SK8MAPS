import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
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

// const Map = () => {
//   return (
//     <div className='map-container'>
//       I'll be a map one day
//     </div>
//    );
// }

// export default Map;
