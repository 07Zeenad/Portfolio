import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <h2 className="logo">Zeenad Fareed</h2>

        <nav className={isOpen ? "nav open" : "nav"}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/education" onClick={() => setIsOpen(false)}>Education</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
