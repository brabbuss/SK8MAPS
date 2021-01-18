import React, {useState, useEffect} from "react";
import "./FindSpotsView.css";
import Map from "../Common/Map/Map";

function FindSpotView({allSk8Maps, updateSelection, selectedSpot}) {

  const [appView, setAppView] = useState(null)
  
  useEffect(() => {
    setAppView('find-spot')
  },[])

  return (
    <section className="fs-container">
      <h2>Find spots by:</h2>
      <div className="fs-sort-container">
        <ul className="fs-ul">
          <li className="fs-" data-testid='f-1'>rails</li>
          <li className="fs-" data-testid='f-2'>curbs</li>
          <li className="fs-" data-testid='f-3'>flats</li>
          <li className="fs-" data-testid='f-4'>stairs</li>
          <li className="fs-" data-testid='f-5'>hills</li>
          <li className="fs-" data-testid='f-6'>parks</li>
        </ul>
      </div>
      <div className="find-map-container">
        <Map 
          allSk8Maps={allSk8Maps}
          updateSelection={updateSelection}
          selectedSpot={selectedSpot}
          appView={appView}          
        />
      </div>
    </section>
  );
}

export default React.memo(FindSpotView);
