import React from "react";

const SpotDetails = ({ selectedSpot, match }) => {
  const { id, title, description, location, features } = selectedSpot;

  const featureList = (
    <div className='feature-container'>
      <h2>Features:</h2>
      <div>
        {features.map(f => (
          <div className='feature-details' key={Date.now()}>
            <h3>{`${f.type} ${f.has ? '✅': '❌'}`}</h3>
            {f.has && <p>{f.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  const onLoad = () => {
    // const id = match.params.spot_id;
    // if (+id !== movie_id) {
    //   syncMovieID(id);
    // }
  };

  if (selectedSpot) {
    return (
      <div>
        <h1>{title} is the spot!</h1>
        <p>{description}</p>
        <ul>{featureList}</ul>
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
