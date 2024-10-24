import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img
          src="/images/RS-WebDev-Icon-text-2.png"
          alt="Home Page"
          className="nav-rswd-logo-image"
        />
      </Link>
      <ul>
        <li>
          <Link to="/about" className="about-me">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/skills" className="skills">
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contact">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/resume" className="resume">
            RESUME
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
