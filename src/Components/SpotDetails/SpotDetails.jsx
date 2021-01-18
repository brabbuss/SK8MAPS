import React, { useEffect } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import "./SpotDetails.css";
import { longboard1 } from "../Common/Assets/longboard1";

const SpotDetails = props => {
  const { allSk8Maps, match, setMatchedMap, matchedMap } = props;

  useEffect(() => {
    syncSk8Map();
  }, []);

  const syncSk8Map = async () => {
    const matchUrl = +match.params.spot_id;
    const matchedSpot = await allSk8Maps.find(m => {
      return m.id === matchUrl;
    });
    if ((matchedSpot && !matchedMap) || matchedSpot !== matchedMap) {
      setMatchedMap(matchedSpot);
    } else if (!matchedSpot) {
      console.log("no match!");
    }
  };

  const featureList = (
    <div className="features-section">
      {matchedMap?.features.map((f, i) => (
        <div className="feature-details" key={Date.now() + i}>
          <div className="feature-type">
            <h3>{`${f.type}`}</h3>
            <h3>{`${f.has ? "✅" : "❌"}`}</h3>
          </div>
          <div className='feature-description'>{f.has && <p>{f.description}</p>}</div>
        </div>
      ))}
    </div>
  );

  const images = () => {
    if (matchedMap?.images && matchedMap?.images[0]) {
      return <img alt="skating a curb" src={matchedMap.images[0]} />;
    } else {
      return <div>{longboard1}</div>;
    }
  };

  if (!allSk8Maps) {
    return (
      <Route>
        <Redirect to="/search" />;
      </Route>
    );
  } else if (matchedMap) {
    return (
      <div className="detail-view">
        <section className="detail-title-container">
          <h1>{matchedMap.title}</h1>
          <p>{matchedMap.description}</p>
          {images()}
        </section>
        <section className="info-wrapper">
          <span className="features-title">
            <h1>FEATURES</h1>
          </span>
          {featureList}
        </section>
      </div>
    );
  } else {
    return (
      <div className="nothing-here-text">
        <h1>Looks like that's not a valid URL</h1>
        <h2>Try double checking that the URL is correct,</h2>
        <h2>
          or head over to the <Link to="/search">search page</Link> to see all
          maps!
        </h2>
      </div>
    );
  }
};

export default SpotDetails;
