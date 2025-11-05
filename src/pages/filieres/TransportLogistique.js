import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Filiere.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import jsPDF from "jspdf";
import {
  FaArrowLeft,
  FaTruck,
  FaChartLine,
  FaWarehouse,
  FaCogs,
  FaMapMarkedAlt,
  FaBullseye,
  FaLightbulb,
  FaBook,
  FaRocket,
  FaBriefcase,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserGraduate
} from "react-icons/fa";

function TransportLogistique() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: "Transport - Logistique"
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

  // 📩 Envoi Email + 📄 Génération PDF
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
      await emailjs.send("service_f58bla9", "template_0btmp9p", templateParams);

      // ✅ Génération du formulaire PDF
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Formulaire d'Inscription - Transport et Logistique", 20, 20);
      doc.setFontSize(12);
      doc.text(`Nom : ${formData.nom}`, 20, 40);
      doc.text(`Prénom : ${formData.prenom}`, 20, 50);
      doc.text(`Adresse : ${formData.adresse}`, 20, 60);
      doc.text(`Email : ${formData.email}`, 20, 70);
      doc.text(`Téléphone : ${formData.telephone}`, 20, 80);
      doc.text(`Filière : ${formData.filiere}`, 20, 90);
      doc.save(`Formulaire_${formData.nom}_${formData.prenom}.pdf`);

      setMessage("🎉 Inscription enregistrée et formulaire téléchargé !");
      setFormData({
        nom: "",
        prenom: "",
        adresse: "",
        email: "",
        telephone: "",
        filiere: "Transport - Logistique"
      });
    } catch (err) {
      console.error("Erreur :", err);
      setMessage("Erreur lors de l'envoi. Veuillez réessayer.");
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
          src="/images/transport-logistique.jpg"
          alt="Transport et Logistique"
          className="filiere-header-img"
        />
        <div className="overlay">
          <h1><FaTruck /> Transport et Logistique</h1>
          <p className="filiere-slogan">
            🚚 Maîtrisez la gestion des flux, de la production à la distribution, et devenez acteur clé de la chaîne logistique mondiale.
          </p>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Présentation</h2>
        <p>
          La filière Transport et Logistique forme des professionnels capables d’organiser, de gérer et d’optimiser les flux de marchandises et d’informations.
          Elle vise à développer des compétences en planification, stockage, transport et distribution au sein d’entreprises industrielles ou commerciales.
        </p>
        <img
          src="/images/logistique.jpg"
          alt="Présentation Transport et Logistique"
          className="filiere-section-img"
        />
      </section>

      {/* OBJECTIFS */}
      <section className="filiere-section objectifs-formation" data-aos="fade-up">
        <h2>Objectifs de la formation</h2>
        <div className="objectifs-grid">
          <div className="objectif-card"><FaBullseye className="objectif-icon" />
            <h3>Maîtriser les flux logistiques</h3>
            <p>Comprendre et gérer les flux physiques et d’information dans la chaîne logistique.</p>
          </div>
          <div className="objectif-card"><FaLightbulb className="objectif-icon" />
            <h3>Optimiser la performance</h3>
            <p>Améliorer la rentabilité et la fluidité des opérations logistiques.</p>
          </div>
          <div className="objectif-card"><FaBook className="objectif-icon" />
            <h3>Utiliser les outils numériques</h3>
            <p>Exploiter les logiciels spécialisés pour la planification et le suivi logistique.</p>
          </div>
          <div className="objectif-card"><FaRocket className="objectif-icon" />
            <h3>Faciliter l’insertion professionnelle</h3>
            <p>Préparer les étudiants à s’intégrer dans des postes de gestion logistique ou de transport.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI CETTE FILIÈRE */}
      <section className="filiere-section highlights" data-aos="zoom-in">
        <h2>Pourquoi choisir cette filière ?</h2>
        <p>
          Le secteur du transport et de la logistique est un pilier essentiel de l’économie mondiale, offrant des débouchés variés et des opportunités internationales.
        </p>
        <div className="highlight-grid">
          <div className="highlight-item"><FaTruck className="icon" />
            <h3>Gestion de la chaîne logistique</h3>
            <p>Apprenez à piloter les flux de marchandises du fournisseur au client.</p>
          </div>
          <div className="highlight-item"><FaWarehouse className="icon" />
            <h3>Gestion d’entrepôts</h3>
            <p>Optimisez le stockage, la manutention et la distribution des produits.</p>
          </div>
          <div className="highlight-item"><FaCogs className="icon" />
            <h3>Planification & Organisation</h3>
            <p>Anticipez les besoins logistiques et coordonnez les opérations.</p>
          </div>
          <div className="highlight-item"><FaMapMarkedAlt className="icon" />
            <h3>Mobilité internationale</h3>
            <p>Développez des compétences recherchées dans un marché globalisé.</p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="filiere-section competences-attendues" data-aos="fade-up">
        <h2>Compétences attendues</h2>
        <ul>
          <li>Planifier et organiser les opérations de transport et logistique</li>
          <li>Utiliser les logiciels de gestion logistique (ERP, WMS, TMS)</li>
          <li>Analyser les coûts et les performances logistiques</li>
          <li>Appliquer les règles de sécurité et de qualité dans les transports</li>
          <li>Communiquer efficacement avec les partenaires et clients</li>
        </ul>
      </section>

      {/* STAGES */}
      <section className="filiere-section stages" data-aos="fade-up">
        <h2>Stages et immersion professionnelle</h2>
        <p>
          Les étudiants effectuent des stages en entreprises de transport, plateformes logistiques ou services d’import-export.
          Ces immersions leur permettent d’appliquer leurs compétences et de découvrir les réalités du terrain.
        </p>
      </section>

      {/* DÉBOUCHÉS & DURÉE */}
      <section className="filiere-section flex-row" data-aos="fade-up">
        <div className="debouches">
          <h2><FaBriefcase /> Débouchés professionnels</h2>
          <ul>
            <li>Responsable logistique</li>
            <li>Gestionnaire de transport</li>
            <li>Agent d’exploitation</li>
            <li>Chef d’entrepôt</li>
            <li>Coordinateur supply chain</li>
            <li>Consultant en logistique</li>
          </ul>
        </div>

        <div className="duree-formation">
          <h2><FaClock /> Durée de la formation</h2>
          <p>BTS/DTS : 2 à 3 ans selon la spécialisation.</p>
          <p>
            La formation comprend des cours théoriques, des études de cas, des projets pratiques et des stages en entreprise.
          </p>
        </div>
      </section>

      {/* CONDITIONS D’ADMISSION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Conditions d’admission</h2>
        <p>
          L’admission est ouverte aux titulaires d’un baccalauréat toutes séries.
          Une bonne capacité d’analyse, d’organisation et de communication est un atout important.
        </p>
      </section>

      {/* FORMULAIRE INSCRIPTION */}
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
              <select name="filiere" value={formData.filiere} onChange={handleChange}>
                <option>Transport - Logistique</option>
              </select>
              <button type="submit" className="btn-inscription" disabled={loading}>
                {loading ? "Envoi..." : "S’inscrire"}
              </button>
            </form>
            {message && <p style={{ marginTop: "12px", color: message.startsWith("Erreur") ? "red" : "green" }}>{message}</p>}

            <Link to="/brochure.pdf" className="btn-brochure" target="_blank">
              📄 Télécharger la brochure
            </Link>
          </div>

          <div className="inscription-faq">
            <h3>FAQ</h3>
            <p><strong>Q :</strong> La formation comprend-elle des stages ?</p>
            <p><strong>R :</strong> Oui, ils sont obligatoires pour valider la formation.</p>
          </div>
        </div>
      </section>

      <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</div>

      <footer className="filiere-footer">
        <p>© 2025 Institut Supérieur Polytechnique (ISP). Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default TransportLogistique;
