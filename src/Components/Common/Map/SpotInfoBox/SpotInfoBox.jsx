import React from "react";
import {Link} from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./SpotInfoBox.css";

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
        <Link to={`/spots/${selectedMarker?.id}`}>
          <h3>{selectedMarker?.title}</h3>
        </Link>
        <p>{selectedMarker?.description}</p>
      </div>
    </InfoWindow>
  );
};

export default SpotInfoBox;