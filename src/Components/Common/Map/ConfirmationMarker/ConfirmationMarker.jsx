import React from "react";
import { Link } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./ConfirmationMarker.css";
import PropTypes from "prop-types";

const ConfirmationMarker = ({
  confirmMarker,
  toggleConfirmationMarker,
  resetZoom,
  createNewSk8Map,
}) => {
  const handleConfirm = () => {
    createSk8Map();
    toggleConfirmationMarker();
  };

  const createSk8Map = () => {
    const newSk8Map = {
      id: Date.now() + 1,
      location: confirmMarker,
    };
    createNewSk8Map(newSk8Map);
  };

  const handleClose = () => {
    resetZoom(17);
    toggleConfirmationMarker();
  };

  const infoBox = (
    <div className="confirm-info-box info-box">
      <h1>Add a new SK8MAP here?</h1>
      <Link
        onClick={handleConfirm}
        to="/add/details"
        className="confirm-button">
        <h1>
          <b>Confirm Placement</b>
        </h1>
      </Link>
    </div>
  );

  if (confirmMarker) {
    return (
      <InfoWindow position={confirmMarker} onCloseClick={handleClose}>
        {infoBox}
      </InfoWindow>
    );
  } else {
    return null;
  }
};

export default ConfirmationMarker;

ConfirmationMarker.propTypes = {
  confirmMarker: PropTypes.object,
  toggleConfirmationMarker: PropTypes.func,
  resetZoom: PropTypes.func,
  createNewSk8Map: PropTypes.func,
};
