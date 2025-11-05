// src/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <img src="/logos/institut.jpg" alt="institut" style={{ height: 48, marginRight: 12 }} />
        <h2>Institut Supérieur Polytechnique de Thiès (ISP)</h2>

        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Accueil</Link></li>
          <li><Link to="/about" className="nav-link">À propos</Link></li>
          <li><Link to="/services" className="nav-link">Nos Services</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-link">Nos Filières ▼</span>
            {dropdownOpen && (
              <ul className="dropdown-content">
                <li><Link to="/filieres/filiere1" className="dropdown-item">Génie Civil</Link></li>
                <li><Link to="/filieres/filiere2" className="dropdown-item">Génie Électronique</Link></li>
                <li><Link to="/filieres/filiere3" className="dropdown-item">Génie Informatique</Link></li>
                <li><Link to="/filieres/filiere4" className="dropdown-item">Transport - Logistique</Link></li>
                <li><Link to="/filieres/filiere5" className="dropdown-item">Gestion Financière</Link></li>
                <li><Link to="/filieres/filiere6" className="dropdown-item">Informatique de Gestion</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="#inscription" className="nav-link">Inscription</Link></li>
          <li><Link to="#contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
