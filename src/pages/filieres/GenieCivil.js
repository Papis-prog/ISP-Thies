import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Filiere.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import jsPDF from "jspdf";
import {
  FaArrowLeft,
  FaHardHat,
  FaTools,
  FaDraftingCompass,
  FaBuilding,
  FaRulerCombined,
  FaCogs,
  FaUserGraduate,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLightbulb,
  FaBriefcase,
  FaClock,
  FaBullseye,
  FaBook,
  FaRocket
} from "react-icons/fa";

function GenieCivil() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: "Génie Civil"
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    emailjs.init("n32gTvpDj9Gs1gL5W");
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
      telephone: formData.telephone
    };

    try {
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
        filiere: "Génie Civil"
      });
    } catch (err) {
      console.error("Erreur envoi à l'établissement:", err);
      setMessage("Erreur lors de l'envoi à l'établissement. Voir console.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Formulaire d'inscription - Génie Civil", 10, 10);
    doc.text(`Nom: ${formData.nom}`, 10, 20);
    doc.text(`Prénom: ${formData.prenom}`, 10, 30);
    doc.text(`Adresse: ${formData.adresse}`, 10, 40);
    doc.text(`Email: ${formData.email}`, 10, 50);
    doc.text(`Téléphone: ${formData.telephone}`, 10, 60);
    doc.text(`Filière: ${formData.filiere}`, 10, 70);
    doc.save("formulaire_inscription_geniecivil.pdf");
  };

  return (
    <div className="filiere-page">
      {/* HEADER */}
      <header className="filiere-header" data-aos="fade-down">
        <Link to="/filieres" className="back-button">
          <FaArrowLeft /> Retour aux filières
        </Link>
        <img
          src="/images/genie-civil.jpg"
          alt="Génie Civil"
          className="filiere-header-img"
        />
        <div className="overlay">
          <h1><FaHardHat /> Génie Civil</h1>
          <p className="filiere-slogan">
            🏗️ Bâtissez l’avenir avec nous, une formation solide pour construire durablement le monde de demain.
          </p>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Présentation</h2>
        <p>
          Le Génie Civil forme des ingénieurs et techniciens capables de concevoir, planifier et réaliser des ouvrages de construction,
          tout en respectant les normes de sécurité, de qualité et d’environnement.
        </p>
        <img
          src="/images/construction-site.jpg"
          alt="Présentation Génie Civil"
          className="filiere-section-img"
        />
      </section>

      {/* OBJECTIFS */}
      <section className="filiere-section objectifs-formation" data-aos="fade-up">
        <h2>Objectifs de la formation</h2>
        <div className="objectifs-grid">
          <div className="objectif-card" data-aos="fade-right">
            <FaBullseye className="objectif-icon" />
            <h3>Connaissance Techniques</h3>
            <p>Acquérir des compétences solides dans la conception et la construction des bâtiments et infrastructures.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaLightbulb className="objectif-icon" />
            <h3>Analyse et conception</h3>
            <p>Développer la capacité à analyser les structures et proposer des solutions innovantes et durables.</p>
          </div>
          <div className="objectif-card" data-aos="fade-left">
            <FaBook className="objectif-icon" />
            <h3>Gestion de projets</h3>
            <p>Maîtriser les outils de planification et de gestion des chantiers.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaRocket className="objectif-icon" />
            <h3>Insertion professionnelle</h3>
            <p>Préparer les étudiants à intégrer rapidement le marché du travail au bout de 2 ans de formation.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="filiere-section highlights" data-aos="zoom-in">
        <h2>Pourquoi choisir cette filière ?</h2>
        <p>
          Le Génie Civil est une filière essentielle pour le développement des infrastructures modernes : routes, ponts, bâtiments, etc.
        </p>
        <div className="highlight-grid">
          <div className="highlight-item" data-aos="fade-right">
            <FaDraftingCompass className="icon" />
            <h3>Formation complète</h3>
            <p>Du dessin technique à la réalisation, vous apprendrez chaque étape d’un projet de construction.</p>
          </div>
          <div className="highlight-item" data-aos="fade-right">
            <FaTools className="icon" />
            <h3>Compétences pratiques</h3>
            <p>Les ateliers et stages permettent d’acquérir une expérience concrète sur le terrain.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaRulerCombined className="icon" />
            <h3>Calcul et dimensionnement</h3>
            <p>Maîtrisez les logiciels et méthodes de calcul pour concevoir des structures sûres et efficaces, evaluation financier des projets.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaBuilding className="icon" />
            <h3>Conception durable</h3>
            <p>Apprenez à intégrer les enjeux environnementaux dans vos projets.</p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="filiere-section competences-attendues" data-aos="fade-up">
        <div className="section-icon"><FaLightbulb /></div>
        <h2>Compétences attendues</h2>
        <ul>
          <li>Lire et interprétation des plans techniques</li>
          <li>Concevoir des ouvrages selon les normes</li>
          <li>Utilisation des logiciels de conception assistée</li>
          <li>Gérer la gestion des chantier de construction</li>
          <li>Assure la qualité et la sécurité des travaux</li>
        </ul>
      </section>

      {/* STAGES */}
      <section className="filiere-section stages" data-aos="fade-up">
        <h2>Stages et Immersion Professionnelle</h2>
        <p>
          Les stages permettent aux étudiants de participer à des projets de construction réels,
          dans des entreprises du bâtiment, des bureaux d’études ou des collectivités.
        </p>
      </section>

      {/* DÉBOUCHÉS */}
      <section className="filiere-section flex-row" data-aos="fade-up">
        <div className="debouches">
          <div className="section-icon"><FaBriefcase /></div>
          <h2>Débouchés professionnels</h2>
          <ul className="debouches-list">
            <li><FaBuilding /> Technicien superieur en BTP</li>
            <li><FaTools /> Chef de chantier</li>
            <li><FaRulerCombined /> Conducteur de travaux</li>
            <li><FaCogs /> Ingénieur en structures</li>
            <li><FaUserGraduate /> Contrôleur de chantier</li>
          </ul>
        </div>

        <div className="duree-formation">
          <div className="section-icon"><FaClock /></div>
          <h2>Durée de formation</h2>
          <p>BTS/DTS : 2 ans selon la spécialisation.</p>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Conditions d’admission</h2>
        <p>
          L’admission en BTS en Génie Civil est ouverte aux titulaires d’un baccalauréat scientifique ou technique (S, T, BT, E, F…), Les etudiants du Bac L peuvent faire le DTS.
        </p>
      </section>

      {/* INSCRIPTION */}
      <section className="filiere-section inscription" data-aos="zoom-in">
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
          <div className="inscription-info">
            <p><FaEnvelope /> ispthies@gmail.com</p>
            <p><FaPhoneAlt /> +221 77 794 95 78 / 77 398 63 63</p>
            <p><FaMapMarkerAlt /> Thiès, Sénégal</p>
          </div>

          <div className="inscription-formulaire">
            <form onSubmit={handleSubmit}>
              <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
              <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
              <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
              <select name="filiere" value={formData.filiere} onChange={handleChange} required>
                <option value="Génie Civil">Génie Civil</option>
                <option value="Génie Informatique">Génie Informatique</option>
                <option value="Génie Électronique">Génie Électronique</option>
                <option value="Transport - Logistique">Transport - Logistique</option>
                <option value="Gestion Financière">Gestion Financière</option>
                <option value="Informatique de Gestion">Informatique de Gestion</option>
              </select>
              <button type="submit" className="btn-inscription" disabled={loading}>
                {loading ? "Envoi..." : "S’inscrire"}
              </button>
            </form>
            {message && <p style={{ marginTop: "12px", color: message.startsWith("Erreur") ? "red" : "green" }}>{message}</p>}

            <button className="btn-brochure" onClick={handleDownload}>
              📄 Télécharger le formulaire
            </button>
          </div>

          <div className="inscription-faq">
            <h3>FAQ</h3>
            <p><strong>Q :</strong> Quelle est la durée du BTS/DTS ?</p>
            <p><strong>R :</strong> 2 ans selon la spécialisation.</p>
            <p><strong>Q :</strong> Les stages sont-ils obligatoires ?</p>
            <p><strong>R :</strong> Oui, ils sont intégrés dans le cursus pour garantir une expérience pratique.</p>
          </div>
        </div>
      </section>

      {/* FLECHE HAUT */}
      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>

      {/* FOOTER */}
      <footer className="filiere-footer">
        <p>© 2025 Institut Supérieur Polytechnique (ISP). Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default GenieCivil;
