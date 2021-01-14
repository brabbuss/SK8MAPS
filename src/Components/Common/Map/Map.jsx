import React, { useState, useCallback, useEffect } from "react";
import "./Map.css";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  // InfoWindow,
} from "@react-google-maps/api";
import SpotInfoBox from '../SpotInfoBox/SpotInfoBox'

const containerStyle = {
  width: "800px",
  height: "500px",
};

let position = {
  lat: 39.816,
  lng: -105.065,
};

const addMarker = latLng => {
  position = latLng;
};

const Map = ({ skateSpots }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCjoD7gA6zlBj9bDgWw0ug2LpbMvu9ypB0",
  });

  const [map, setMap] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);
  // const [userLoc, setUserLoc] = useState(null);
  
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
    // let currentLocation = getUserLoc()
    // setUserLoc(currentLocation)
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // const success = (pos) => {
  //   var crd = pos.coords;

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }
  // const getUserLoc = () => (navigator.geolocation.getCurrentPosition(success)}

  const markers = skateSpots?.map((spot, i) => (
    <Marker
      key={Date.now() + i}
      position={spot.location}
      label={spot.title}
      onClick={() => setSelectedSpot(spot)}
    />
  ));

  // const spotInfoBox = (
  //   <InfoWindow
  //     onCloseClick={() => {setSelectedSpot(null)}}
  //     position={{
  //       lat: selectedSpot?.location.lat,
  //       lng: selectedSpot?.location.lng,
  //     }}>
  //     <p>Oh hey there</p>
  //   </InfoWindow>
  // );

  return isLoaded ? (
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
        {selectedSpot && 
          <SpotInfoBox 
            selectedSpot={selectedSpot} 
            setSelectedSpot={setSelectedSpot}
          />
        }
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Map);
