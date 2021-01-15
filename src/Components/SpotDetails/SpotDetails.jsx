import React, {useContext} from "react";
import './SpotDetails.css'
import AppContext from "../App/AppContext";

const SpotDetails = () => {
const [state, dispatch] = useContext(AppContext);
const {selectedSpot} = state

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
          {<img alt='skating a curb' src={"https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG"} />}
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
