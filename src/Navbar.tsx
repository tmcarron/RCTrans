import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <div className="nav-logo"></div>
      </Link>
      <section className="nav-vertical-section">
        <ul className="nav-grouping">
          <li className="nav-item">
            <Link to="/trans-service">Transmission Services</Link>
          </li>

          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <p className="contact-paragraph">
          Call us at <a href="tel:+12482885575">248.288.5575</a> to schedule
          your FREE diagnosis.
        </p>
      </section>
    </div>
  );
};

export default Navbar;
