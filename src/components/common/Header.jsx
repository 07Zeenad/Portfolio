import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <h2 className="logo">Muhammad Zeenad Fareed</h2>

        <nav className={isOpen ? "nav open" : "nav"}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={closeMenu}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" onClick={closeMenu}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
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
