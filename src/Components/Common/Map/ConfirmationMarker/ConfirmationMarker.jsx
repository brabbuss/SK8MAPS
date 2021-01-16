import React, {useContext} from "react";
import AppContext from "../../../App/AppContext";
import { Link } from "react-router-dom";
import { InfoWindow, Marker } from "@react-google-maps/api";
import "./ConfirmationMarker.css";

const ConfirmationMarker = () => {
  const [state, dispatch] = useContext(AppContext);
  
  const handleClick = () => {
    createSk8Map()
    removeConfirmation()
  }

  const removeConfirmation = () => {
    const action = {type: 'ADD_CONFIRMATION_MARKER', marker: null}
    dispatch(action)
  }

  const createSk8Map = () => {
    const newSk8Map = {
      id: Date.now()+1,
      location: state.marker.location
    }
    const action = {type: 'CREATE_SK8MAP', newSk8Map: newSk8Map}
    dispatch(action)
  };

  const infoBox = (
    <div className="info-box">
      <p>Add a new SK8MAP here?</p>
      <Link to='/add/details' className="confirm-button">
        <div onClick={handleClick}>Confirm Placement</div>
      </Link>
    </div>
  )
  
  if (state.marker.location) {
    return (
      <InfoWindow position={state.marker.location} onCloseClick={removeConfirmation}>
        {infoBox}
      </InfoWindow>
    );
  } else {
    return null
  }
};

export default ConfirmationMarker;
