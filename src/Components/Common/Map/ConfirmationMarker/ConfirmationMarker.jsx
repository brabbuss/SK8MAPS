import React, {useContext} from "react";
// import AppContext from "../../../App/AppContext";
import { Link } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import "./ConfirmationMarker.css";

const ConfirmationMarker = ({confirmMarker, toggleConfirmationMarker, resetZoom, createNewSk8Map}) => {
  // const [state, dispatch] = useContext(AppContext);
  
  const handleConfirm = () => {
    createSk8Map()
    toggleConfirmationMarker()
  }

  const createSk8Map = () => {
    const newSk8Map = {
      id: Date.now()+1,
      location: confirmMarker,
    }
    createNewSk8Map(newSk8Map)
  };

  const handleClose = () => {
    resetZoom(17)
    toggleConfirmationMarker()
  }

  const infoBox = (
    <div className="info-box">
      <p>Add a new SK8MAP here?</p>
      <Link to='/add/details' className="confirm-button">
        <div onClick={handleConfirm}>Confirm Placement</div>
      </Link>
    </div>
  )
  
  if (confirmMarker) {
    return (
      <InfoWindow position={confirmMarker} onCloseClick={handleClose}>
        {infoBox}
      </InfoWindow>
    );
  } else {
    return null
  }
};

export default ConfirmationMarker;
