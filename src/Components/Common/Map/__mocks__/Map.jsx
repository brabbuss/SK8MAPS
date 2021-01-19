import React, { useState } from "react";
import createGoogleMapsMock from "jest-google-maps-mock";
import DetailsForm from "../../../DetailsForm/DetailsForm";
import { Link } from "react-router-dom";
import SpotMarker from '../SpotMarker/SpotMarker'
import { tddMockData } from "../../../../tddMockData";
jest.mock("../SpotMarker/SpotMarker.jsx");
jest.mock("../SpotInfoBox/SpotInfoBox.jsx");
jest.mock("../ConfirmationMarker/ConfirmationMarker.jsx");

let mockGoogleMap = createGoogleMapsMock();

const Map = ({
  updateSelection,
  selectedSpot,
  createNewSk8Map,
  markerLocations,
  appView,
}) => {
  const [newSk8Map, setNewSk8Map] = useState(null);

  const markers = () => {
    return markerLocations.map(marker => <SpotMarker key={marker.id} marker={marker}/>)
  };

  const setLoc = e => {
    e.preventDefault();
    let data = tddMockData.mockNewSk8Map;
    setNewSk8Map(data);
  };

  return (
    <div data-testid="google-map">
      <div id="selected-spot">
        <Link to="/spots/1">Old Church</Link>
        <p>{selectedSpot.description}</p>
      </div>

      <div id="confirmation-marker">
        <button onClick={setLoc}>Confirm Placement</button>
      </div>

      {newSk8Map && (
        <DetailsForm
          newSk8Map={newSk8Map}
          selectedSpot={selectedSpot}
          saveNewSk8Map={jest.fn}
        />
      )}

      <div>{markerLocations && markers()}</div>
    </div>
  );
};

export default Map;
