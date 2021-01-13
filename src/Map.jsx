import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 39.816,
  lng: -105.065,
};

const recenter = (latLng) => {
  console.log(latLng.lat(), latLng.lng())
}

function Map({ skateSpots }) {
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

  const markers = skateSpots.map((spot,i) => (
    <Marker key={Date.now()+i} position={spot.location} label={spot.title} />
  ));



  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={e => recenter(e.latLng)}  
    >
      {/* map over available spots */}
      {/* <Marker position={center} label={"this is mah house"} /> */}
      {markers}
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);

// const Map = () => {
//   return (
//     <div className='map-container'>
//       I'll be a map one day
//     </div>
//    );
// }

// export default Map;
