import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import {sk8Logo} from '../Assets/sk8Logo'

const NavBar = () => {
  const [selection, setSelection] = useState(null)

  const getStylings = (selector, id) => {
    let className = selector === id ? 'nav-btn-selected' : '';
    return className
  }
  
  return (
    <header className="nav-container">
      <Link to="/" value='nav-title' className="app-name-link">
        {sk8Logo}
      </Link>
      <nav className="links-container">
        <div className='link-wrapper'>
          <Link title='search' to="/search" className="nav-btn-link">
            <div id='search' value='search' onClick={(e) => setSelection(e.target.id)} className={`nav-btn ${getStylings(selection, 'search')}`}>Search</div>
          </Link>
        </div>
        <div className='link-wrapper'>
          <Link title='contribute' to="/add" className="nav-btn-link">
            <div id='contribute' value='contribute' onClick={(e) => setSelection(e.target.id)} className={`nav-btn ${getStylings(selection, 'contribute')}`}>Contribute</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
