import React from "react";
import { Link } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./SpotInfoBox.css";

const SpotInfoBox = ({ selectedMarker, setSelectedMarker }) => {
  const featureDetails = (
    <section className='feature-container'>
      {selectedMarker &&
        selectedMarker.features.map(feat => {
          if (feat.has) {
            return (
              <div className="feature-details">
                <p><b>{feat.type}</b></p>
                <p>{feat.condition}</p>
              </div>
            );
          }
        })}
    </section>
  );

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
          <h1>{selectedMarker?.title}</h1>
        </Link>
        <p>{selectedMarker?.description}</p>
        {featureDetails}
      </div>
    </InfoWindow>
  );
};

export default SpotInfoBox;
