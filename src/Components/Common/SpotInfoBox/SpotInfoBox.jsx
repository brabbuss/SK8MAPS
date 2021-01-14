import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import './SpotInfoBox.css'

const SpotInfoBox = ({ selectedSpot, setSelectedSpot }) => {
  return (
    <InfoWindow
      onCloseClick={() => {
        setSelectedSpot(null);
      }}
      position={{
        lat: selectedSpot?.location.lat,
        lng: selectedSpot?.location.lng,
      }}>
      <div className="info-box">
        <h3>{selectedSpot?.title}</h3>
        <p>{selectedSpot?.description}</p>
      </div>
    </InfoWindow>
  );
};

export default SpotInfoBox;
