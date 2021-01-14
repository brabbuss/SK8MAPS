import React from "react";
import { Marker } from "@react-google-maps/api";

const SpotMarker = ({ spot, handleMarkerClick }) => {
  return (
    <Marker
      position={spot.location}
      label={spot.title}
      onClick={e => {
        handleMarkerClick(e, spot);
      }}
    />
  );
};

export default SpotMarker;
