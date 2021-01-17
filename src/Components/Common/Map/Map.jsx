import React, { useState, useCallback, useContext, useEffect } from "react";
import AppContext from "../../App/AppContext";
import "./Map.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {getFromLocal} from '../Utilities/localStorage'
import SpotMarker from "./SpotMarker/SpotMarker";
import SpotInfoBox from "./SpotInfoBox/SpotInfoBox";
import ConfirmationMarker from './ConfirmationMarker/ConfirmationMarker'
const API_KEY = process.env.REACT_APP_YOUR_API_KEY;

const containerStyle = {
  width: "1000px",
  height: "600px",
};

let defaultPosition = {
  lat: 39.816,
  lng: -105.065,
};

const Map = ({createNewSk8Map}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [state, dispatch] = useContext(AppContext);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(defaultPosition);
  const [confirmMarker, setConfirmMarker] = useState(null)
  const [selectedSpot, setSelectedSpot] = useState(getFromLocal("SELECTED-SK8MAP"))

  const onLoad = useCallback(async function callback(map) {
    const bounds = await new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    map.setCenter(center);
    map.zoom = 12;
    setMap(map);
    map.panTo(center);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const updateSelection = selectedMarker => {
    setSelectedSpot(selectedMarker)
  };
  
  const toggleConfirmationMarker = (loc) => {
    if (loc) {
      setConfirmMarker(loc)
    } else {
      setConfirmMarker(null)
    }
  }

  const handleZoom = () => {
    if (map) {
      if (map.getZoom() >= 19) {
        if (map.getMapTypeId() != window.google.maps.MapTypeId.HYBRID) {
          map.setMapTypeId(window.google.maps.MapTypeId.HYBRID)
          map.setTilt(25);
        }
      } else if (map.getZoom() < 19) {
        map.setMapTypeId(window.google.maps.MapTypeId.ROADMAP)
        map.setTilt(0);
      }
    }
  }

  const resetZoom = (level) => {
    level ? map.zoom = 18 : map.zoom = 15
    map.panTo(center);
    handleZoom()
  }

  const handleMapClick = (e) => {
    if (state.appView === "add-spot") {
      const newPos = e.latLng
      map.zoom = 22
      setCenter(newPos);
      map.panTo(newPos);
      toggleConfirmationMarker(newPos)
      handleZoom()
    } 
  }

  const handleMarkerClick = (e, spot) => {
    map.panTo(e.latLng);
    map.zoom = 19;
    setCenter(e.latLng);
    updateSelection(spot);
    handleZoom()
  };   

  const markers = state.storedSpots?.map((spot, i) => (
    <SpotMarker
      key={Date.now() + i}
      spot={spot}
      handleMarkerClick={handleMarkerClick}
    />
  ));

  const renderMap = () => {
    return (
      <div className="map-container" data-testid='google-map'>
        <GoogleMap
          clickableIcons={false}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onZoomChanged={handleZoom}
          onClick={(e) => handleMapClick(e)}
          onLoad={onLoad}
          onUnmount={onUnmount}>
          {markers}
          {confirmMarker && (
            <ConfirmationMarker
            confirmMarker={confirmMarker}
            resetZoom={resetZoom}
            toggleConfirmationMarker={toggleConfirmationMarker}
            createNewSk8Map={createNewSk8Map}
            />)}
          {selectedSpot && (
            <SpotInfoBox
              selectedMarker={selectedSpot}
              updateSelection={updateSelection}
              resetZoom={resetZoom}
            />
          )}
        </GoogleMap>
      </div>
    );
  };

  if (loadError) {
    return (
      <div>
        Can't find the map right now. I'll keep looking, come back later...
      </div>
    );
  }
  // return renderMap();
  return isLoaded ? renderMap() : <h1>Now where did I put that map...</h1>;
};

export default Map;
