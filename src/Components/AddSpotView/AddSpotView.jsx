import React, {useContext, useEffect} from "react";
import AppContext from "../App/AppContext";
import Map from "../Common/Map/Map";

function AddSpotView({createNewSk8Map}) {
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
      <Map createNewSk8Map={createNewSk8Map} />
    </section>
  ) 
}

export default React.memo(AddSpotView);