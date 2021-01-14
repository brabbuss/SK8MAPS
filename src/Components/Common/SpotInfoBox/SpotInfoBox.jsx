import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import './SpotInfoBox.css'

const SpotInfoBox = ({ selectedMarker, setSelectedMarker }) => {
  return (
    <InfoWindow
      onCloseClick={() => {
        setSelectedMarker(null);
      }}
      position={{
        lat: selectedMarker?.location.lat,
        lng: selectedMarker?.location.lng,
      }}>
      <div className="info-box">
        <h3>{selectedMarker?.title}</h3>
        <p>{selectedMarker?.description}</p>
      </div>
    </InfoWindow>
  );
};

export default SpotInfoBox;
