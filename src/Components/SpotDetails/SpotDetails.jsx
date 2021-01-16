import React, {useContext, useEffect} from "react";
import './SpotDetails.css'
import AppContext from "../App/AppContext";

const SpotDetails = ({match}) => {
  const [state, dispatch] = useContext(AppContext);
  const {selectedSpot} = state
  
  useEffect(() => {
    // console.log(+match.params.spot_id === selectedSpot.id)
    syncSelectedSpot()
  },[])
  
  const syncSelectedSpot = () => {
    if (match.params.spot_id !== selectedSpot?.id || !selectedSpot) {
      // console.log(state.storedSpots)
      const matchedSpot = state.storedSpots.find(s => s.id === +match.params.spot_id)
      // console.log(matchedSpot);
      const action = {type: "UPDATE_SELECTED_SPOT", selectedSpot: matchedSpot}
      dispatch(action)
      return
    }
  }

  const featureList = (
    <div className="features-section">
        {selectedSpot?.features.map((f, i) => (
          <div className="feature-details" key={Date.now() + i}>
            <div className='feature-type'>
              <h3>{`${f.type}`}</h3> 
              <h3>{`${f.has ? "✅" : "❌"}`}</h3>
            </div>
            {f.has && <p>{f.description}</p>}
          </div>
        ))}
    </div>
  );

  if (selectedSpot) {
    return (
      <div className='detail-view'>
        <div className='detail-title-container'>
          <h1>{selectedSpot.title}</h1>
          <p>{selectedSpot.description}</p>
          {selectedSpot?.images && <img alt='skating a curb' src={selectedSpot.images[0]} />}
        </div>
        <div className='info-wrapper'>
          {featureList}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Now where did I put that information...</h1>;
      </div>
    );
  }
};

export default SpotDetails;
