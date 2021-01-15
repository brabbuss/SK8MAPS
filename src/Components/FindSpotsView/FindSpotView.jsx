import React, {useContext, useEffect} from "react";
import AppContext from '../App/AppContext'
import "./FindSpotView.css";
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
          <li className="fs-">rails</li>
          <li className="fs-">curbs</li>
          <li className="fs-">flats</li>
          <li className="fs-">stairs</li>
          <li className="fs-">hills</li>
          <li className="fs-">parks</li>
        </ul>
      </div>
      <div className="find-map-container">
        <Map />
      </div>
    </section>
  );
}

export default React.memo(FindSpotView);
