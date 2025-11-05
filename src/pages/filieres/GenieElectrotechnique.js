import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Filiere.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import jsPDF from "jspdf";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaShieldAlt,
  FaBrain,
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

function GenieElectrotechnique() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: "Génie Électronique"
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
        filiere: "Génie Électronique"
      });
    } catch (err) {
      console.error("Erreur envoi à l'établissement:", err);
      setMessage("Erreur lors de l'envoi à l'établissement. Voir console.");
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Formulaire d'inscription", 14, 22);
    doc.setFontSize(12);
    doc.text(`Nom : ${formData.nom}`, 14, 40);
    doc.text(`Prénom : ${formData.prenom}`, 14, 50);
    doc.text(`Adresse : ${formData.adresse}`, 14, 60);
    doc.text(`Email : ${formData.email}`, 14, 70);
    doc.text(`Téléphone : ${formData.telephone}`, 14, 80);
    doc.text(`Filière : ${formData.filiere}`, 14, 90);
    doc.save("formulaire_inscription.pdf");
  };

  return (
    <div className="filiere-page">
      {/* HEADER */}
      <header className="filiere-header" data-aos="fade-down">
        <Link to="/filieres" className="back-button">
          <FaArrowLeft /> Retour aux filières
        </Link>
        <img
          src="/images/genie-electronique.jpg"
          alt="Génie Électronique"
          className="filiere-header-img"
        />
        <div className="overlay">
          <h1><FaLaptopCode /> Génie Électronique</h1>
          <p className="filiere-slogan">
            ⚡ Plongez dans le monde de l’électronique et maîtrisez les technologies de demain.
          </p>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Présentation</h2>
        <p>
          Le Génie Électronique forme des experts capables de concevoir et développer des systèmes électroniques avancés,
          incluant l’électronique embarquée, les capteurs intelligents et les systèmes de communication.
        </p>
        <img
          src="/images/electronique.jpg"
          alt="Présentation Génie Électronique"
          className="filiere-section-img"
        />
      </section>

      {/* OBJECTIFS DE LA FORMATION */}
      <section className="filiere-section objectifs-formation" data-aos="fade-up">
        <h2>Objectifs de la formation</h2>
        <div className="objectifs-grid">
          <div className="objectif-card" data-aos="fade-right">
            <FaBullseye className="objectif-icon" />
            <h3>Maîtriser l'électronique moderne</h3>
            <p>Acquérir les bases et les compétences avancées en électronique analogique et numérique.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaLightbulb className="objectif-icon" />
            <h3>Innover dans les systèmes embarqués</h3>
            <p>Développer et optimiser des systèmes électroniques intégrés et connectés.</p>
          </div>
          <div className="objectif-card" data-aos="fade-left">
            <FaBook className="objectif-icon" />
            <h3>Explorer l’électronique appliquée</h3>
            <p>Appliquer les connaissances dans les domaines de l’énergie, l’automatisation et l’IoT.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaRocket className="objectif-icon" />
            <h3>Favoriser l’insertion professionnelle</h3>
            <p>Préparer les étudiants à répondre aux besoins technologiques de l'industrie.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR CETTE FILIÈRE */}
      <section className="filiere-section highlights" data-aos="zoom-in">
        <h2>Pourquoi choisir cette filière ?</h2>
        <p>
          Une formation spécialisée pour répondre aux défis technologiques actuels,
          avec un accent sur l’innovation et l’application pratique.
        </p>
      </section>

      {/* COMPÉTENCES ATTENDUES */}
      <section className="filiere-section competences-attendues" data-aos="fade-up">
        <div className="section-icon"><FaLightbulb /></div>
        <h2>Compétences attendues</h2>
        <ul>
          <li>Concevoir des systèmes électroniques embarqués</li>
          <li>Maîtriser la conception de circuits analogiques et numériques</li>
          <li>Développer des applications IoT</li>
          <li>Assurer la maintenance et l’optimisation des systèmes électroniques</li>
          <li>Analyser et résoudre des problèmes complexes en électronique</li>
        </ul>
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
          {/* Colonne gauche - Infos contact */}
          <div className="inscription-info">
            <p><FaEnvelope /> ispthies@gmail.com</p>
            <p><FaPhoneAlt /> +221 77 794 95 78 / 77 398 63 63</p>
            <p><FaMapMarkerAlt /> Thiès, Sénégal</p>
          </div>

          {/* Colonne centre - Formulaire */}
          <div className="inscription-formulaire">
            <form onSubmit={handleSubmit}>
              <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
              <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
              <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
              <select name="filiere" value={formData.filiere} onChange={handleChange} required>
                <option value="Génie Électrotechnique">Génie Électrotechnique</option>
                <option value="Génie Civil">Génie Civil</option>
                <option value="Génie Informatique">Génie Informatique</option>
                <option value="Transport - Logistique">Transport - Logistique</option>
                <option value="Gestion Financière">Gestion Financière</option>
                <option value="Informatique de Gestion">Informatique de Gestion</option>
              </select>
              <button type="submit" className="btn-inscription" disabled={loading}>
                {loading ? "Envoi..." : "S’inscrire"}
              </button>
            </form>
            {message && <p style={{ marginTop: "12px", color: message.startsWith("Erreur") ? "red" : "green" }}>{message}</p>}
            <button type="button" className="btn-inscription" onClick={generatePDF}>
              📄 Télécharger le formulaire
            </button>
          </div>

          {/* Colonne droite - FAQ */}
          <div className="inscription-faq">
            <h3>FAQ</h3>
            <p><strong>Q :</strong> Quelle est la durée du BTS/DTS ?</p>
            <p><strong>R :</strong> 2 ans selon la spécialisation.</p>
            <p><strong>Q :</strong> Les stages sont-ils obligatoires ?</p>
            <p><strong>R :</strong> Oui, ils sont intégrés dans le cursus pour garantir une expérience pratique.</p>
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
        <p>© 2025 Institut Supérieur Polytechnique (ISP). Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default GenieElectrotechnique;
