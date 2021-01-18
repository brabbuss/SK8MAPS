import React, {useState, useEffect} from "react";
import Map from "../Common/Map/Map";

function AddSpotView({createNewSk8Map, allSk8Maps, updateSelection, selectedSpot}) {
  const [appView, setAppView] = useState(null)
  
  useEffect(() => {
    setAppView('add-spot')
  },[])

  return (
    <section>
      <h1>click to add a spot</h1>
      <Map 
        createNewSk8Map={createNewSk8Map} 
        markerLocations={allSk8Maps}
        updateSelection={updateSelection}
        selectedSpot={selectedSpot}
        appView={appView}
      />
    </section>
  ) 
}

export default React.memo(AddSpotView);