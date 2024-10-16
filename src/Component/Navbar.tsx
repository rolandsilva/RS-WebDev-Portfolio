import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      .
      <ul>
        <Link to="/">
          <img
            src="/images/RS-WebDev-Icon-text.png"
            alt="Home Page"
            className="nav-rswd-logo"
          />
        </Link>
        <li>
          <Link to="/about" className="btn about-me">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/skills" className="btn skills">
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="btn portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/contact" className="btn contact">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/resume" className="btn resume">
            RESUME
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
