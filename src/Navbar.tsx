import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="#home">
        <div className="nav-logo"></div>
      </a>
      <section className="nav-vertical-section">
        <ul className="nav-grouping">
          <li className="nav-item">
            <a href="#trans-service">Transmission Repair</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact </a>
          </li>

          <li className="nav-item">
            <a href="#about">About</a>
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
