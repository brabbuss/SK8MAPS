import React from "react";
import { Link } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./SpotInfoBox.css";

const SpotInfoBox = ({ resetZoom, selectedMarker, updateSelection }) => {
  const featureDetails = (
    <section className='infobox-wrapper feature-container'>
      {selectedMarker &&
        selectedMarker.features.map(feat => {
          if (feat.has) {
            return (
              <div className="feature-details infobox-details">
                <p><b>{feat.type}</b></p>
                <br/>
                <p>quality{feat.condition > 2 ? '👍' : '👎'}</p>
              </div>
            );
          }
        })}
    </section>
  );

  const infoBox = (
    <div className="info-box">
      <Link className='infobox-link' to={`/spots/${selectedMarker?.id}`}>
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
      onCloseClick={() => {
        resetZoom()
        updateSelection(null)
      }}
      position={selectedMarker.location}
    >
      {infoBox}
    </InfoWindow>
  );
};

export default SpotInfoBox;
