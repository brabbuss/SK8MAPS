import React, {Component} from "react";
import createGoogleMapsMock from "jest-google-maps-mock";
import {Link} from 'react-router-dom'
import {tddMockData} from '../../../../tddMockData'

const {mockSpotAllData} = tddMockData
let mockGoogleMap = createGoogleMapsMock()


const Map = ({updateSelection, selectedSpot, createNewSk8Map, markerLocations, appView}) => {
  return(
    <div data-testid='google-map'>
      <p>{selectedSpot.id}</p>
      <Link to='/spots/1'>Old Church</Link>
    </div>
  )
};

export default Map;

