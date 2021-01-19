import React from 'react';

const SpotMarker = ({marker, handleMarkerClick}) => {
  
  return ( 
    <div onClick={() => handleMarkerClick(marker)}>
      {marker.title}
    </div>
   );
}
 
export default SpotMarker;