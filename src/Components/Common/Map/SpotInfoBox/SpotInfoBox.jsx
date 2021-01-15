import React from "react";
import { Link } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./SpotInfoBox.css";

const SpotInfoBox = ({ pixelOffset, selectedMarker, setSelectedMarker }) => {
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

  const infoBox = (
    <div className="info-box">
      <Link to={`/spots/${selectedMarker?.id}`}>
        <h1>{selectedMarker?.title}</h1>
      </Link>
      <p>{selectedMarker?.description}</p>
      {featureDetails}
    </div>
  )

  return (
    <InfoWindow
      marker={selectedMarker.location}
      options={{pixelOffset: new window.google.maps.Size(0, -43)}}
      onCloseClick={() => {setSelectedMarker(null)}}
      position={selectedMarker.location}
    >
      {infoBox}
    </InfoWindow>
  );
};

export default SpotInfoBox;
