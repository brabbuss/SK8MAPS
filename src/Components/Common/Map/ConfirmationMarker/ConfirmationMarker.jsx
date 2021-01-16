import React, {useContext} from "react";
import AppContext from "../../../App/AppContext";
import { Link } from "react-router-dom";
import { InfoWindow, Marker } from "@react-google-maps/api";
import "./ConfirmationMarker.css";

const ConfirmationMarker = () => {
  const [state, dispatch] = useContext(AppContext);
  
  const removeConfirmation = () => {
    const action = {type: 'ADD_NEW_SPOT_MARKER', newSpot: null}
    dispatch(action)
  }

  const infoBox = (
    <div className="info-box">
      <p>Add a new SK8MAP here?</p>
      <Link to='/add/details' className="confirm-button">
        <div onClick={removeConfirmation}>Confirm Placement</div>
      </Link>
    </div>
  )
  
  if (state.newSpot.location) {
    return (
      <InfoWindow position={state.newSpot.location} onCloseClick={removeConfirmation}>
        {infoBox}
      </InfoWindow>
    );
  } else {
    return null
  }
};

export default ConfirmationMarker;
