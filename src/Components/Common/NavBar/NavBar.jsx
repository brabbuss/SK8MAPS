import { Link } from "react-router-dom";
import "./NavBar.css";
import { sk8Logo } from "../sk8logo";

const NavBar = () => {
  return (
    <header className="nav-container">
      <Link to="/" className="app-name-link">
        {sk8Logo}
      </Link>
      <nav className="link-container">
        <Link to="/search" className="nav-btn-link">
          <div className="nav-btn">Search</div>
        </Link>
        <Link to="/add" className="nav-btn-link">
          <div className="nav-btn">Contribute</div>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
