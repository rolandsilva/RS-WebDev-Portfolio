import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="h1Home">
      <ul>
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
