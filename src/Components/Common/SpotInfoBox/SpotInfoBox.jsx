import React from "react";
import { InfoWindow } from "@react-google-maps/api";


const SpotInfoBox = ({selectedSpot, setSelectedSpot}) => {
  return (
    <InfoWindow
      onCloseClick={() => {
        setSelectedSpot(null);
      }}
      position={{
        lat: selectedSpot?.location.lat,
        lng: selectedSpot?.location.lng,
      }}>
      <p>Oh hey there</p>
    </InfoWindow>
  );
};

export default SpotInfoBox;
