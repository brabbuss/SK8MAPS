import React, { useEffect, useState } from "react";
import {getLocal, saveLocal} from '../Common/Utilities/localStorage'

const SpotDetails = ({ selectedSpot, match }) => {

  const featureList = (
    <div className="feature-container">
      <h2>Features:</h2>
      <div>
        {selectedSpot?.features.map((f, i) => (
          <div className="feature-details" key={Date.now() + i}>
            <h3>{`${f.type} ${f.has ? "✅" : "❌"}`}</h3>
            {f.has && <p>{f.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  if (selectedSpot) {
    return (
      <div>
        <h1>{selectedSpot.title}</h1>
        <p>{selectedSpot.description}</p>
        {featureList}
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
