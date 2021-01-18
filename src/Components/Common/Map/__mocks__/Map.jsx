import React, { useState } from "react";
import createGoogleMapsMock from "jest-google-maps-mock";
import App, {setNewSk8Map} from '../../../App/App'
import { Link } from "react-router-dom";
import { tddMockData } from "../../../../tddMockData";
const { mockSpotAllData } = tddMockData;

let mockGoogleMap = createGoogleMapsMock();

const setLoc = () => {
  let data = tddMockData.mockNewSk8Map
  setNewSk8Map(data)
}

const Map = ({
  updateSelection,
  selectedSpot,
  createNewSk8Map,
  markerLocations,
  appView,
}) => {
  return (
    <div data-testid="google-map">
      <div id='selected-spot'>
        <Link to="/spots/1">Old Church</Link>
        <p>{selectedSpot.description}</p>
      </div>
      <div id='confirmation-marker'>
        <Link to="/add/details" onClick={setLoc}>Confirm Placement</Link>
      </div>
    </div>
  );
};

export default Map;
