import React, { useState, useCallback, useEffect } from "react";
import "./Map.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SpotMarker from "./SpotMarker/SpotMarker";
import SpotInfoBox from "./SpotInfoBox/SpotInfoBox";

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
    googleMapsApiKey: "AIzaSyCjoD7gA6zlBj9bDgWw0ug2LpbMvu9ypB0",
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(defaultPosition);
  const [zoom, setZoom] = useState(12);

  const recenter = latLng => {
    setCenter(latLng);
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setCenter(defaultPosition);
    setMap(map);
    map.panTo(defaultPosition);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (e, spot) => {
    setSelectedMarker(spot);
    setZoom(14)
    setCenter(defaultPosition);
    map.panTo(defaultPosition);    
    updateSelection(spot);
  }

  const markers = skateSpots?.map((spot, i) => (
    <Marker
      key={Date.now() + i}
      position={spot.location}
      label={spot.title}
      onClick={(e) => {
        handleMarkerClick(e, spot)
      }}
    />
  ));

  const renderMap = () => {
    return (
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          // onClick={e => recenter(e.latLng)}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {markers}
          {/* {skateSpots && (
            <SpotMarker
              setSelectedMarker={setSelectedMarker}
              updateSelection={updateSelection}
              skateSpots={skateSpots}
            />
          )} */}
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
