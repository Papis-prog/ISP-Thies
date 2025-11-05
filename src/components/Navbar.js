import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaGraduationCap, FaEnvelope, FaPen } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filiereOpen, setFiliereOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      ></div>

      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logos/institut.jpg" alt="Logo Institut" className="logo-img" />
          </Link>
          <span>Institut Supérieur Polytechnique (ISP)</span>
        </div>

        {/* Hamburger */}
        <div
          className={`menu-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu principal */}
        <ul className={`navbar-menu ${mobileOpen ? "open" : ""}`}>

          {/* Bouton Nos filières uniquement mobile */}
          <li className="mobile-filiere-btn">
            <button
              onClick={() => { handleScrollTo("filiere"); setMobileOpen(false); }}
              className="btn-mobile-filiere"
            >
              
            </button>
          </li>

          <li>
            <button onClick={() => { handleScrollTo("home"); setMobileOpen(false); }}>
              <FaHome /> Accueil
            </button>
          </li>
          <li>
            <Link to="/apropos" onClick={() => setMobileOpen(false)}>
              <FaInfoCircle /> À propos
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMobileOpen(false)}>
              <FaServicestack /> Nos services
            </Link>
          </li>

          {/* Dropdown Filières desktop */}
          <li className={`dropdown ${filiereOpen ? "open" : ""}`}>
            <button
              className="dropdown-toggle"
              onClick={() => setFiliereOpen(!filiereOpen)}
            >
              <FaGraduationCap /> Filières <span className={`arrow ${filiereOpen ? "rotate" : ""}`}>▾</span>
            </button>
            <ul className={`dropdown-menu ${filiereOpen ? "active" : ""}`}>
              <li><Link to="/filieres/genie-civil"><FaGraduationCap /> Génie Civil</Link></li>
              <li><Link to="/filieres/genie-electrotechnique"><FaGraduationCap /> Génie Électrotechnique</Link></li>
              <li><Link to="/filieres/genie-informatique"><FaGraduationCap /> Génie Informatique</Link></li>
              <li><Link to="/filieres/transport-logistique"><FaGraduationCap /> Transport & Logistique</Link></li>
              <li><Link to="/filieres/Comptabilite-gestion"><FaGraduationCap /> Comptabilite Gestion</Link></li>
              <li><Link to="/filieres/informatique-de-gestion"><FaGraduationCap /> Informatique de Gestion</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/admission" onClick={() => setMobileOpen(false)}>
              <FaPen /> Admission
            </Link>
          </li>
          <li>
            <button onClick={() => { handleScrollTo("contact"); setMobileOpen(false); }}>
              <FaEnvelope /> Contact
            </button>
          </li>
          <li>
            <button onClick={() => { handleScrollTo("inscription"); setMobileOpen(false); }}>
              <FaPen /> Inscription
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
