import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import "./SpotDetails.css";
import AppContext from "../App/AppContext";
import { longboard1 } from "../Common/Assets/longboard1";

const SpotDetails = ({ match }) => {
  const [state, dispatch] = useContext(AppContext);
  const { selectedSpot } = state;

  useEffect(() => {
    syncSelectedSpot();
  }, []);

  const syncSelectedSpot = () => {
    let matchedSpot = state.storedSpots?.find(
      s => s.id === +match.params.spot_id
    );
    if (matchedSpot && match.params.spot_id !== matchedSpot.id || !selectedSpot) {
      const action = {
        type: "UPDATE_SELECTED_SPOT",
        selectedSpot: matchedSpot,
      };
      dispatch(action);
      return;
    }
  };

  const featureList = (
    <div className="features-section">
      {selectedSpot?.features.map((f, i) => (
        <div className="feature-details" key={Date.now() + i}>
          <div className="feature-type">
            <h3>{`${f.type}`}</h3>
            <h3>{`${f.has ? "✅" : "❌"}`}</h3>
          </div>
          {f.has && <p>{f.description}</p>}
        </div>
      ))}
    </div>
  );

  const images = () => {
    if (selectedSpot?.images && selectedSpot?.images[0]) {
      return <img alt="skating a curb" src={selectedSpot.images[0]} />;
    } else {
      return (
        <div>
          {longboard1}
          {/* <img src={longboard1} className="App-logo longboard-icon" alt="logo" /> */}
        </div>
      );
    }
  };

  if (!state.storedSpots.find(s => s.id === +match.params.spot_id)) {
    return (
      <Route>
        <Redirect to="/search" />;
      </Route>
    )
  } else if (selectedSpot) {  
    return (
      <div className="detail-view">
        <div className="detail-title-container">
          <h1>{selectedSpot.title}</h1>
          <p>{selectedSpot.description}</p>
          {images()}
        </div>
        <div className="info-wrapper">{featureList}</div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Now where did I put that information...</h1>;
      </div>
    );
  }
};

export default SpotDetails;
