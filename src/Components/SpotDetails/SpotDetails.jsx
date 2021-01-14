import React from 'react';

const SpotDetails = ({title, match}) => {

  const onLoad = () => {
    const id = match.params.movie_id;
    // if (+id !== movie_id) {
    //   syncMovieID(id);
    // }
  }

  return ( 
    <div>
      <h1>{title}</h1>
    </div>
   );
}
 
export default SpotDetails;