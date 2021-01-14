import React, { useState, useCallback, useEffect } from "react";
import "./Map.css";
import {
  GoogleMap,
  useJsApiLoader,
  Marker
} from "@react-google-maps/api";
import SpotInfoBox from "../SpotInfoBox/SpotInfoBox";

const containerStyle = {
  width: "1000px",
  height: "600px",
};

let position = {
  lat: 39.816,
  lng: -105.065,
};

const addMarker = latLng => {
  position = latLng;
};

const Map = ({ skateSpots, setSelectedSpot }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCjoD7gA6zlBj9bDgWw0ug2LpbMvu9ypB0",
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const markers = skateSpots?.map((spot, i) => (
    <Marker
      key={Date.now() + i}
      position={spot.location}
      label={spot.title}
      onClick={() => {
        setSelectedMarker(spot);
        setSelectedSpot(spot);
      }}
    />
  ));

  const renderMap = () => {
    return (
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
          center={position}
          zoom={1}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={e => addMarker(e.latLng)}>
          {/* Child components, such as markers, info windows, etc. */}
          {markers}
          {selectedMarker && (
            <SpotInfoBox
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
              setSelectedSpot={setSelectedSpot}
            />
          )}
        </GoogleMap>
      </div>
    );
  };

  if (loadError) {
    return <div>Can't find the map right now. I'll keep looking, come back later...</div>;
  }
  return isLoaded ? renderMap() : <h1>Now where did I put that map...</h1>;
};

export default React.memo(Map);
