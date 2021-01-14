import React from 'react';
import { Marker } from "@react-google-maps/api";

const SpotMarker = ({skateSpots, setSelectedMarker, updateSelection}) => {
  const markers = skateSpots?.map((spot, i) => (
    <Marker
      key={Date.now() + i}
      position={spot.location}
      label={spot.title}
      onClick={() => {
        setSelectedMarker(spot);
        updateSelection(spot);
      }}
    />
  ));
  
  return ( 
    {markers}
   );
}
 
export default SpotMarker;