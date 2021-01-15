import React, {useContext, useEffect} from "react";
import AppContext from "../App/AppContext";
import Map from "../Common/Map/Map";

function AddSpotView({ skateSpots, updateSelection }) {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    changeViewAdd()
  },[])

  const changeViewAdd = () => {
    const action = {type: 'CHANGE_VIEW', view: 'add-spot'}
    dispatch(action)
  };

  return (
    <section>
      <h1>click to add a spot</h1>
      <Map updateSelection={updateSelection} skateSpots={skateSpots} />
    </section>
  ) 
}

export default React.memo(AddSpotView);