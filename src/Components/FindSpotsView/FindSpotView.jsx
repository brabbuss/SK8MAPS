import React from "react";
import './FindSpotView.css'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "500px",
};

let position = {
  lat: 39.816,
  lng: -105.065,
};

const addMarker = latLng => {
  let loc = {
    lat: +latLng.lat().toFixed(3),
    lng: +latLng.lng().toFixed(3),
  };
  console.log(position);
  position = loc;
  console.log(position);
};

function FindSpotView({ skateSpots }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCjoD7gA6zlBj9bDgWw0ug2LpbMvu9ypB0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const markers = skateSpots.map((spot, i) => (
    <Marker key={Date.now() + i} position={spot.location} label={spot.title} />
  ));

  return isLoaded ? (
    <section className="fs-container">
      <h2>Find some spots</h2>
      <div className="fs-sort-container">
        <nav className='fs-navbar'>NAVBAR</nav>
        <ul className='fs-ul'>
          <li className='fs-'>rails</li>
          <li className='fs-'>curbs</li>
          <li className='fs-'>flats</li>
          <li className='fs-'>stairs</li>
          <li className='fs-'>hills</li>
          <li className='fs-'>parks</li>
        </ul>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={e => addMarker(e.latLng)}>
        {markers}
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </section>
  ) : (
    <></>
  );
}

export default React.memo(FindSpotView);