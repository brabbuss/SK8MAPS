import { Link } from "react-router-dom";
import "./NavBar.css";
import {sk8Logo} from './sk8logo'

const NavBar = () => {
  const highlight = (e) => {
    // if (!e.className.includes(`${e.target}-highlight`)) {
    //   e.className = `nav-btn ${e.target}-highlight` 
    // } 
  }
  
  return (
    <header className="nav-container">
      <Link to="/" onClick={(e) => highlight(e)} value='nav-title' className="app-name-link">
        {sk8Logo}
      </Link>
      <nav className="link-container">
        <Link to="/search" className="nav-btn-link">
          <div onClick={(e) => highlight(e)} value='search' className="nav-btn">Search</div>
        </Link>
        <Link to="/add" className="nav-btn-link">
          <div onClick={(e) => highlight(e)} value='contribute' className="nav-btn">Contribute</div>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
