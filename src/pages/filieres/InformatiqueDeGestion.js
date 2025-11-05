import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Filiere.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaDatabase,
  FaNetworkWired,
  FaChartLine,
  FaBriefcase,
  FaBook,
  FaRocket,
  FaBullseye,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLightbulb,
  FaUserGraduate,
} from "react-icons/fa";

function InformatiqueGestion() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: "Informatique de Gestion",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    try {
      emailjs.init("n32gTvpDj9Gs1gL5W"); // même clé que home.js
    } catch (err) {
      console.warn("Erreur init EmailJS:", err);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const templateParams = {
      student_name: `${formData.nom} ${formData.prenom}`,
      student_email: formData.email,
      student_course: formData.filiere,
      adresse: formData.adresse,
      telephone: formData.telephone,
    };

    try {
      await emailjs.send("service_f58bla9", "template_0btmp9p", templateParams);
      setMessage("🎉 Inscription envoyée avec succès !");
      setFormData({
        nom: "",
        prenom: "",
        adresse: "",
        email: "",
        telephone: "",
        filiere: "Informatique de Gestion",
      });
    } catch (err) {
      console.error("Erreur envoi EmailJS:", err);
      setMessage("Erreur lors de l’envoi du formulaire.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="filiere-page">
      {/* HEADER */}
      <header className="filiere-header" data-aos="fade-down">
        <Link to="/filieres" className="back-button">
          <FaArrowLeft /> Retour aux filières
        </Link>
        <img
          src="/images/informatique-gestion.jpg"
          alt="Informatique de Gestion"
          className="filiere-header-img"
        />
        <div className="overlay">
          <h1><FaLaptopCode /> Informatique de Gestion</h1>
          <p className="filiere-slogan">
            💻 Alliez technologie et management pour optimiser les performances de l’entreprise.
          </p>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Présentation</h2>
        <p>
          La filière Informatique de Gestion forme des professionnels capables d’intégrer
          les outils informatiques dans la gestion des entreprises. Elle développe à la fois
          des compétences techniques et une solide culture managériale.
        </p>
        <img
          src="/images/presentation-informatique-gestion.jpg"
          alt="Présentation Informatique de Gestion"
          className="filiere-section-img"
        />
      </section>

      {/* OBJECTIFS */}
      <section className="filiere-section objectifs-formation" data-aos="fade-up">
        <h2>Objectifs de la formation</h2>
        <div className="objectifs-grid">
          <div className="objectif-card" data-aos="fade-right">
            <FaBullseye className="objectif-icon" />
            <h3>Double compétence</h3>
            <p>Associer les savoirs informatiques à la gestion d’entreprise.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaBook className="objectif-icon" />
            <h3>Maîtriser les outils de gestion</h3>
            <p>ERP, bases de données et systèmes d’information comptables.</p>
          </div>
          <div className="objectif-card" data-aos="fade-left">
            <FaRocket className="objectif-icon" />
            <h3>Développer des solutions</h3>
            <p>Créer des applications adaptées aux besoins de gestion des entreprises.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI CETTE FILIÈRE */}
      <section className="filiere-section highlights" data-aos="zoom-in">
        <h2>Pourquoi choisir cette filière ?</h2>
        <p>
          Elle combine technologie et stratégie pour préparer des profils recherchés capables
          de piloter les systèmes d’information et de soutenir la performance organisationnelle.
        </p>
        <div className="highlight-grid">
          <div className="highlight-item" data-aos="fade-right">
            <FaDatabase className="icon" />
            <h3>Maîtrise des données</h3>
            <p>Collecte et exploitation des informations pour la décision.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaChartLine className="icon" />
            <h3>Analyse des performances</h3>
            <p>Optimiser les coûts et les ressources via des tableaux de bord.</p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES ATTENDUES */}
      <section className="filiere-section competences-attendues" data-aos="fade-up">
        <h2>Compétences attendues</h2>
        <ul>
          <li>Conception de systèmes d’information</li>
          <li>Gestion de bases de données</li>
          <li>Programmation et développement d’applications</li>
          <li>Analyse et audit des processus de gestion</li>
          <li>Utilisation des logiciels de gestion intégrée (ERP)</li>
        </ul>
      </section>

      {/* STAGES */}
      <section className="filiere-section stages" data-aos="fade-up">
        <h2>Stages et immersion professionnelle</h2>
        <p>
          Les étudiants effectuent un stage pratique de 6 à 8 semaines pour appliquer leurs
          compétences dans les entreprises et administrations.
        </p>
      </section>

      {/* DÉBOUCHÉS + DURÉE */}
      <section className="filiere-section flex-row" data-aos="fade-up">
        <div className="debouches">
          <h2>Débouchés professionnels</h2>
          <ul className="debouches-list">
            <li><FaLaptopCode /> Développeur d’applications de gestion</li>
            <li><FaDatabase /> Gestionnaire de bases de données</li>
            <li><FaNetworkWired /> Administrateur systèmes</li>
            <li><FaChartLine /> Contrôleur de gestion</li>
            <li><FaUserGraduate /> Consultant en systèmes d’information</li>
          </ul>
        </div>

        <div className="duree-formation">
          <h2>Durée de formation</h2>
          <p>BTS/DTS en 2 à ans selon la spécialisation.</p>
          <p>
            Le programme alterne cours, ateliers de développement et stages en milieu professionnel.
          </p>
        </div>
      </section>

      {/* CONDITIONS D’ADMISSION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Conditions d’admission</h2>
        <p>
          Ouverte aux titulaires d’un baccalauréat (S, L2, G ou équivalent) motivés par l’informatique et la gestion.
        </p>
      </section>

      {/* INSCRIPTION */}
      <section id="inscription" className="filiere-section inscription" data-aos="zoom-in">
        <h2>Prêt à rejoindre l’ISP ? Cliquez ci-dessous pour vous inscrire.</h2>
                 {/* Bouton cliquable vers la page Inscription */}
                  <div style={{ margin: "20px 0", textAlign: "center" }}>
                    <Link
                      to="/inscription"
                      style={{
                        display: "inline-block",
                        padding: "12px 25px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#0056b3";
                        e.target.style.transform = "scale(1.05)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#007bff";
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      Accéder au formulaire complet
                    </Link>
                  </div>
        <div className="inscription-grid">
          {/* Coordonnées */}
          <div className="inscription-info">
            <p><FaEnvelope /> ispthies@gmail.com</p>
            <p><FaPhoneAlt /> +221 77 794 95 78 / 77 398 63 63</p>
            <p><FaMapMarkerAlt /> Thiès, Sénégal</p>
          </div>

          {/* Formulaire */}
          <div className="inscription-formulaire">
            <form onSubmit={handleSubmit}>
              <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
              <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
              <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
              <select name="filiere" value={formData.filiere} onChange={handleChange} required>
                <option value="Informatique de Gestion">Informatique de Gestion</option>
                <option value="Génie Civil">Génie Civil</option>
                <option value="Génie Informatique">Génie Informatique</option>
                <option value="Génie Électronique">Génie Électronique</option>
                <option value="Transport - Logistique">Transport - Logistique</option>
                <option value="Gestion Financière">Gestion Financière</option>
              </select>

              <button type="submit" className="btn-inscription" disabled={loading}>
                {loading ? "Envoi..." : "S’inscrire"}
              </button>
            </form>

            {message && (
              <p style={{ marginTop: "12px", color: message.startsWith("Erreur") ? "red" : "green" }}>
                {message}
              </p>
            )}

            <Link
              to="/brochure-informatique-gestion.pdf"
              className="btn-brochure"
              target="_blank"
              rel="noreferrer"
            >
              📄 Télécharger la brochure
            </Link>
          </div>

          {/* FAQ */}
          <div className="inscription-faq">
            <h3>FAQ</h3>
            <p><strong>Q :</strong> Quelle est la durée du BTS/DTS ?</p>
            <p><strong>R :</strong> 2 à 3 ans selon la spécialisation.</p>
            <p><strong>Q :</strong> Les stages sont-ils obligatoires ?</p>
            <p><strong>R :</strong> Oui, pour garantir l’expérience pratique.</p>
          </div>
        </div>
      </section>

      {/* SCROLL TOP */}
      <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑
      </div>

      {/* FOOTER */}
      <footer className="filiere-footer">
        <p>© {new Date().getFullYear()} Institut Supérieur Polytechnique (ISP). Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default InformatiqueGestion;
