import React, {useState, useEffect} from "react";
import "./FindSpotsView.css";
import Map from "../Common/Map/Map";

function FindSpotView({allSk8Maps, updateSelection, selectedSpot}) {

  const [appView, setAppView] = useState(null)
  const [category, setCategory] = useState('All')
  const [filteredMaps, setFilteredMaps] = useState(allSk8Maps)

  useEffect(() => {
    setAppView('find-spot')
  },[])

  const handleFilter = (e) => {
    const category = e.target.title
    if (category === 'All') {
      setFilteredMaps(allSk8Maps)
    } else {
      const categoryMaps = allSk8Maps.reduce((filtered, map) => {
        map.features.forEach(f => {
          if (f.type === category && f.has) {
            filtered.push(map)
          }
        })
        return filtered
      }, [])
      setFilteredMaps(categoryMaps);
    }
    setCategory(category)
  }

  const getStylings = (selector, id) => {
    let className = selector === id ? 'selected-choice' : 'choice';
    return className
  }

  return (
    <section className="fs-container">
      <h2>Find spots by:</h2>
      <div className="fs-sort-container">
        <ul className="fs-ul">
          <li onClick={(e) => handleFilter(e)} title="Rails" className={`fs  ${getStylings(category, 'Rails')}`} data-testid='f-1'>rails</li>
          <li onClick={(e) => handleFilter(e)} title="Curbs" className={`fs  ${getStylings(category, 'Curbs')}`} data-testid='f-2'>curbs</li>
          <li onClick={(e) => handleFilter(e)} title="Flats" className={`fs  ${getStylings(category, 'Flats')}`} data-testid='f-3'>flats</li>
          <li onClick={(e) => handleFilter(e)} title="Stairs" className={`fs  ${getStylings(category, 'Stairs')}`} data-testid='f-4'>stairs</li>
          <li onClick={(e) => handleFilter(e)} title="Hills" className={`fs  ${getStylings(category, 'Hills')}`} data-testid='f-5'>hills</li>
          <li onClick={(e) => handleFilter(e)} title="Parks" className={`fs  ${getStylings(category, 'Parks')}`} data-testid='f-6'>parks</li>
          <li onClick={(e) => handleFilter(e)} title="All" className={`fs  ${getStylings(category, 'All')}`} data-testid='f-6'>ALL</li>
        </ul>
      </div>
      <div className="find-map-container">
        <Map 
          markerLocations={filteredMaps}
          updateSelection={updateSelection}
          selectedSpot={selectedSpot}
          appView={appView}          
        />
      </div>
    </section>
  );
}

export default React.memo(FindSpotView);
