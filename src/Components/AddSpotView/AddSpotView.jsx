import React, { useState, useEffect } from "react";
import Map from "../Common/Map/Map";
import PropTypes from "prop-types";

function AddSpotView({
  createNewSk8Map,
  allSk8Maps,
  updateSelection,
  selectedSpot,
}) {
  const [appView, setAppView] = useState(null);

  useEffect(() => {
    setAppView("add-spot");
  }, []);

  return (
    <section className="fs-container">
      <br />
      <h2>
        Click the map to add a new <b>SK8MAP</b>
      </h2>
      <br />
      <div id="map-container" className="find-map-container">
        <Map
          createNewSk8Map={createNewSk8Map}
          markerLocations={allSk8Maps}
          updateSelection={updateSelection}
          selectedSpot={selectedSpot}
          appView={appView}
        />
      </div>
    </section>
  );
}

export default React.memo(AddSpotView);

AddSpotView.propTypes = {
  createNewSk8Map: PropTypes.func,
  allSk8Maps: PropTypes.array,
  updateSelection: PropTypes.func,
  selectedSpot: PropTypes.object,
};
