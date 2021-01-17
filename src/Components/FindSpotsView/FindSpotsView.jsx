import React, {useContext, useEffect} from "react";
import AppContext from '../App/AppContext'
import "./FindSpotsView.css";
import Map from "../Common/Map/Map";

function FindSpotView() {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    changeViewFind()
  },[])

  const changeViewFind = () => {
    const action = {type: "CHANGE_VIEW", view: 'find-spot'}
    dispatch(action)
  };

  return (
    <section className="fs-container">
      <h2>Find spots by:</h2>
      <div className="fs-sort-container">
        <ul className="fs-ul">
          <li className="fs-" data-testid='f-1'>rails</li>
          <li className="fs-" data-testid='f-2'>curbs</li>
          <li className="fs-" data-testid='f-3'>flats</li>
          <li className="fs-" data-testid='f-4'>stairs</li>
          <li className="fs-" data-testid='f-5'>hills</li>
          <li className="fs-" data-testid='f-6'>parks</li>
        </ul>
      </div>
      <div className="find-map-container">
        <Map />
      </div>
    </section>
  );
}

export default React.memo(FindSpotView);
