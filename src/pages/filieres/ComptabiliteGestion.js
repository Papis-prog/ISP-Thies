// src/pages/filieres/ComptabiliteGestion.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Filiere.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import {
  FaArrowLeft,
  FaChartLine,
  FaCalculator,
  FaMoneyBillWave,
  FaPiggyBank,
  FaUniversity,
  FaBalanceScale,
  FaBriefcase,
  FaLightbulb,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBullseye,
  FaBook,
  FaRocket,
  FaUserGraduate
} from "react-icons/fa";

function ComptabiliteGestion() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: "Comptabilite Gestion"
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once:false pour réanimer quand on remonte
    // Initialise EmailJS (même clé que dans home.js)
    try {
      emailjs.init("n32gTvpDj9Gs1gL5W");
    } catch (err) {
      console.warn("EmailJS init warning:", err);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
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
      telephone: formData.telephone
    };

    try {
      // Même envoi que dans home.js
      await emailjs.send(
        "service_f58bla9",
        "template_0btmp9p",
        templateParams
      );

      setMessage("🎉 Inscription enregistrée ! L'établissement a reçu vos informations.");
      setFormData({
        nom: "",
        prenom: "",
        adresse: "",
        email: "",
        telephone: "",
        filiere: " Comptabilite Gestion"
      });
    } catch (err) {
      console.error("Erreur envoi à l'établissement:", err);
      setMessage("Erreur lors de l'envoi à l'établissement. Voir console.");
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
          src="/images/comptable.jpg"
          alt="Gestion Financière"
          className="filiere-header-img"
        />
        <div className="overlay">
          <h1><FaMoneyBillWave /> Gestion Financière</h1>
          <p className="filiere-slogan">
            💰 Maîtrisez les outils de la finance moderne et devenez acteur du développement économique.
          </p>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Présentation</h2>
        <p>
          La filière Gestion Financière forme des professionnels capables de gérer, d’analyser et d’optimiser
          les ressources financières des entreprises et institutions. Le cursus combine théorie, outils
          pratiques et immersion professionnelle pour préparer à la prise de décision économique.
        </p>
        <img
          src="/images/finance-presentation.jpg"
          alt="Présentation Comptabilite Gestion "
          className="filiere-section-img"
        />
      </section>

      {/* OBJECTIFS DE LA FORMATION */}
      <section className="filiere-section objectifs-formation" data-aos="fade-up">
        <h2>Objectifs de la formation</h2>
        <div className="objectifs-grid">
          <div className="objectif-card" data-aos="fade-right">
            <FaBullseye className="objectif-icon" />
            <h3>Maîtriser les bases financières</h3>
            <p>Comprendre la comptabilité, l’analyse financière et la gestion budgétaire.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaLightbulb className="objectif-icon" />
            <h3>Développer une vision stratégique</h3>
            <p>Analyser les marchés et accompagner les décisions d’investissement.</p>
          </div>
          <div className="objectif-card" data-aos="fade-left">
            <FaBook className="objectif-icon" />
            <h3>Maîtriser les outils</h3>
            <p>Utiliser logiciels comptables et outils d’analyse pour suivre les performances.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaRocket className="objectif-icon" />
            <h3>Insertion professionnelle</h3>
            <p>Préparer les étudiants à intégrer banques, entreprises et cabinets de conseil.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR CETTE FILIÈRE */}
      <section className="filiere-section highlights" data-aos="zoom-in">
        <h2>Pourquoi choisir cette filière ?</h2>
        <p>
          La comptabilité Gestion est essentielle pour toute organisation. Elle offre des compétences pratiques et recherchées,
          permettant d’évoluer rapidement sur des postes à responsabilités.
        </p>
        <div className="highlight-grid">
          <div className="highlight-item" data-aos="fade-right">
            <FaChartLine className="icon" />
            <h3>Vision stratégique</h3>
            <p>Interpréter les données pour orienter les décisions financières.</p>
          </div>
          <div className="highlight-item" data-aos="fade-right">
            <FaCalculator className="icon" />
            <h3>Compétences comptables</h3>
            <p>Maîtrise de la comptabilité analytique et financière.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaPiggyBank className="icon" />
            <h3>Gestion de trésorerie</h3>
            <p>Optimisation des flux pour améliorer la rentabilité.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaUniversity className="icon" />
            <h3>Perspectives d’emploi</h3>
            <p>Postes variés dans la finance, la comptabilité et le contrôle de gestion.</p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES ATTENDUES */}
      <section className="filiere-section competences-attendues" data-aos="fade-up">
        <div className="section-icon"><FaLightbulb /></div>
        <h2>Compétences attendues</h2>
        <ul>
          <li>Maîtrise la comptabilité générale et analytique</li>
          <li>Analyse les états financiers</li>
          <li>Élaboration des budgets et prévisions</li>
          <li>Gestion de la trésorerie et les investissements</li>
          <li>Utilisation des outils numériques de gestion</li>
        </ul>
      </section>

      {/* STAGES */}
      <section className="filiere-section stages" data-aos="fade-up">
        <h2>Stages et immersion professionnelle</h2>
        <p>
          Les stages (généralement 6–8 semaines) sont intégrés au cursus : entreprises, banques, cabinets d’audit ou organisations publiques.
          Ils permettent de mettre en pratique les compétences et d’établir un réseau professionnel.
        </p>
      </section>

      {/* DÉBOUCHÉS + DURÉE (alignés) */}
      <section className="filiere-section flex-row" data-aos="fade-up">
        <div className="debouches">
          <div className="section-icon"><FaBriefcase /></div>
          <h2>Débouchés professionnels</h2>
          <ul className="debouches-list">
            <li><FaChartLine /> Analyste financier</li>
            <li><FaBalanceScale /> Comptable / Auditeur</li>
            <li><FaMoneyBillWave /> Contrôleur de gestion</li>
            <li><FaPiggyBank /> Gestionnaire de trésorerie</li>
            <li><FaUniversity /> Conseiller bancaire</li>
            <li><FaUserGraduate /> Consultant financier</li>
          </ul>
        </div>

        <div className="duree-formation">
          <div className="section-icon"><FaClock /></div>
          <h2>Durée de formation</h2>
          <p>BTS / DTS : 2 ans selon le niveau et la spécialisation.</p>
          <p>
            Le cursus combine cours théoriques, travaux dirigés, études de cas et stages afin d’assurer une insertion professionnelle rapide.
          </p>
        </div>
      </section>

      {/* CONDITIONS D'ADMISSION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Conditions d’admission</h2>
        <p>
          Ouvert aux titulaires d’un baccalauréat (séries G, L2 ou équivalents). Un test/entretien peut être demandé selon le profil.
        </p>
      </section>

      {/* INSCRIPTION réorganisée (3 colonnes) */}
      <section id="inscription" className="filiere-section inscription" data-aos="zoom-in">
        <h2>Prêt à rejoindre l’ISP ? Cliquez ci-dessous pour vous inscrire.</h2>
                 {/* Bouton cliquable vers la page Inscription */}
                  <div style={{ margin: "20px 0", textAlign: "center" }}>
                    <Link
                      to="/inscription"
                      style={{
                        display: "inline-block",
                        padding: "12px 25px",
                        backgroundColor: "#04468cff",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#8fb300ff";
                        e.target.style.transform = "scale(1.05)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#03356bff";
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      Accéder au formulaire complet
                    </Link>
                  </div>
        <div className="inscription-grid">
          {/* Colonne gauche - contact */}
          <div className="inscription-info">
            <p><FaEnvelope /> ispthies@gmail.com</p>
            <p><FaPhoneAlt /> +221 77 794 95 78 / 77 398 63 63</p>
            <p><FaMapMarkerAlt /> Thiès, Sénégal</p>
          </div>

          {/* Colonne centre - formulaire (même champs & EmailJS) */}
          <div className="inscription-formulaire">
            <form onSubmit={handleSubmit}>
              <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
              <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
              <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
              <select name="filiere" value={formData.filiere} onChange={handleChange} required>
                <option value=" Comptabilite Gestion">Gestion Financière</option>
                <option value="Génie Informatique">Génie Informatique</option>
                <option value="Génie Civil">Génie Civil</option>
                <option value="Génie Électronique">Génie Électronique</option>
                <option value="Transport - Logistique">Transport - Logistique</option>
                <option value="Informatique de Gestion">Informatique de Gestion</option>
              </select>

              <button type="submit" className="btn-inscription" disabled={loading}>
                {loading ? "Envoi..." : "S’inscrire"}
              </button>
            </form>

            {message && <p style={{ marginTop: "12px", color: message.startsWith("Erreur") ? "red" : "green" }}>{message}</p>}

            {/* Brochure : place le fichier PDF dans /public et adapte le nom si nécessaire */}
            <Link to="/brochure-gestion-financiere.pdf" className="btn-brochure" target="_blank" rel="noreferrer">
              📄 Télécharger la brochure
            </Link>
          </div>

          {/* Colonne droite - FAQ */}
          <div className="inscription-faq">
            <h3>FAQ</h3>
            <p><strong>Q :</strong> Quelle est la durée du BTS/DTS ?</p>
            <p><strong>R :</strong> 2 à 3 ans selon la spécialisation.</p>
            <p><strong>Q :</strong> Les stages sont-ils obligatoires ?</p>
            <p><strong>R :</strong> Oui — ils sont intégrés au cursus pour l’expérience pratique.</p>
          </div>
        </div>
      </section>

      {/* FLECHE DE RETOUR HAUT */}
      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>

      {/* FOOTER */}
      <footer className="filiere-footer">
        <p>© {new Date().getFullYear()} Institut Supérieur Polytechnique (ISP). Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default ComptabiliteGestion;
