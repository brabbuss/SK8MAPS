import React, { useState, useCallback, useEffect } from "react";
import "./Map.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SpotMarker from "./SpotMarker/SpotMarker";
import SpotInfoBox from "./SpotInfoBox/SpotInfoBox";
const API_KEY = process.env.REACT_APP_YOUR_API_KEY

const containerStyle = {
  width: "1000px",
  height: "600px",
};

let defaultPosition = {
  lat: 39.816,
  lng: -105.065,
};

const Map = ({ skateSpots, updateSelection }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(defaultPosition);
  const [zoom, setZoom] = useState(12);
  
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
    map.panTo(defaultPosition);
  }, []);
  
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  
  const handleMarkerClick = (e, spot) => {
    console.log(spot)
    console.log(e.latLng)
    setSelectedMarker(spot);
    setZoom(14);
    setCenter(e.latLng);
    map.panTo(e.latLng);
    updateSelection(spot);
  };

  const markers = skateSpots?.map((spot, i) => (
    <SpotMarker
      key={Date.now() + i}
      spot={spot}
      handleMarkerClick={handleMarkerClick}
    />
  ));

  

  const renderMap = () => {
    return (
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          // onClick={(e) => console.log(e.latLng)}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {markers}
          {selectedMarker && (
            <SpotInfoBox
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
              updateSelection={updateSelection}
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
  return isLoaded ? renderMap() : <h1>Now where did I put that map...</h1>;
};

export default React.memo(Map);
