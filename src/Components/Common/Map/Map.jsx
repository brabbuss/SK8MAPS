import React, { useState, useCallback, useContext } from "react";
import AppContext from "../../App/AppContext";
import "./Map.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import SpotMarker from "./SpotMarker/SpotMarker";
import SpotInfoBox from "./SpotInfoBox/SpotInfoBox";
const API_KEY = process.env.REACT_APP_YOUR_API_KEY;

const containerStyle = {
  width: "1000px",
  height: "600px",
};

let defaultPosition = {
  lat: 39.816,
  lng: -105.065,
};

const Map = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [state, dispatch] = useContext(AppContext);
  // console.log('state called in MAP', state)
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(defaultPosition);
  const [zoom, setZoom] = useState(17);

  const onLoad = useCallback(async function callback(map) {
    // console.log("ONLOAD MAP");
    const bounds = await new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    map.setCenter(center);
    setMap(map);
    map.panTo(center);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const updateSelection = selectedMarker => {
    const action = {type: 'UPDATE_SELECTED_SPOT', spot: selectedMarker}
    dispatch(action)
  };

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

  const handleMapClick = (e) => {
    // console.log('handle MAP click')
    if (state.appView === "add-spot") {
      // console.log('MAP.ZOOM', map.zoom)
      // console.log('MAPgetZoom()', map.getZoom())
      // console.log('handle MAP ADD click')
      // console.log(e.latLng)
      map.zoom = 22
      const newPos = e.latLng
      setCenter(newPos);
      map.panTo(newPos);
      handleZoom()
    } 
  }

  const handleMarkerClick = (e, spot) => {
    setSelectedMarker(spot);
    map.zoom = 19;
    setCenter(e.latLng);
    map.panTo(e.latLng);
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
      <div className="map-container">
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
          {selectedMarker && (
            <SpotInfoBox
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
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
