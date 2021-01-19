import React from "react";
import { Link } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./SpotInfoBox.css";
import PropTypes from "prop-types";

const SpotInfoBox = ({ resetZoom, selectedMarker, updateSelection }) => {
  const featureDetails = (
    <section className="infobox-wrapper feature-container">
      {selectedMarker &&
        selectedMarker.features.map((feat, i) => {
          if (feat.has) {
            return (
              <div key={i} className="feature-details infobox-details">
                <p>
                  <b>{feat.type}</b>
                </p>
                <br />
                <p>quality{feat.condition > 2 ? "👍" : "👎"}</p>
              </div>
            );
          }
          return null;
        })}
    </section>
  );

  const infoBox = (
    <div className="info-box">
      <Link
        className="infobox-link"
        to={`/spots/${selectedMarker?.id}`}
        onClick={() => updateSelection(null)}>
        <h1>{selectedMarker?.title}</h1>
      </Link>
      <p>{selectedMarker?.description}</p>
      {featureDetails}
    </div>
  );

  return (
    <InfoWindow
      marker={selectedMarker.location}
      options={{ pixelOffset: new window.google.maps.Size(0, -43) }}
      onCloseClick={() => {
        resetZoom();
        updateSelection(null);
      }}
      position={selectedMarker.location}>
      {infoBox}
    </InfoWindow>
  );
};

export default SpotInfoBox;

SpotInfoBox.propTypes = {
  resetZoom: PropTypes.func,
  selectedMarker: PropTypes.object,
  updateSelection: PropTypes.func,
};
