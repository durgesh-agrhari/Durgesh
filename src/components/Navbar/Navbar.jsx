import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom"; // Use NavLink for active styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Durgesh</div>
        <Toggle />
      </div>

      {/* right */}
      <div className="n-right">
        {/* Desktop Menu */}
        <div className="n-list">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutMe" className={({ isActive }) => isActive ? "active-link" : ""}>
                AboutMe
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutMe" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
                AboutMe
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
