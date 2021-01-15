import React from "react";
import { Marker } from "@react-google-maps/api";

const SpotMarker = ({ spot, handleMarkerClick }) => {
  return (
    <Marker
      position={spot.location}
      title={spot.title}
      onClick={e => {
        handleMarkerClick(e, spot);
      }}
    />
  );
};

export default SpotMarker;
