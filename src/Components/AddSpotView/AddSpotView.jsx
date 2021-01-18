import React, { useState, useEffect } from "react";
import Map from "../Common/Map/Map";

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
    <section className='fs-container'>
      <br/>
      <h2>Click on a location to add a <b>SK8MAP</b></h2>
      <br/>
      <div className="find-map-container">
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
