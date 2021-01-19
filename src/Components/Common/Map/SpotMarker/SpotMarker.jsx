import React from "react";
import { Marker } from "@react-google-maps/api";
import PropTypes from "prop-types";

const SpotMarker = ({ spot, handleMarkerClick }) => {
  return (
    <Marker
      data-testid={`${spot.id}`}
      position={spot.location}
      title={spot.title}
      onClick={e => {
        handleMarkerClick(e, spot);
      }}
    />
  );
};

export default SpotMarker;

SpotMarker.propTypes = {
  spot: PropTypes.object,
  handleMarkerClick: PropTypes.func
};