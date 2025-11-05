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

function GenieInformatique() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: "Génie Informatique"
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
        filiere: "Génie Informatique"
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
    doc.text("Formulaire d'inscription - Génie Informatique", 10, 10);
    doc.text(`Nom: ${formData.nom}`, 10, 20);
    doc.text(`Prénom: ${formData.prenom}`, 10, 30);
    doc.text(`Adresse: ${formData.adresse}`, 10, 40);
    doc.text(`Email: ${formData.email}`, 10, 50);
    doc.text(`Téléphone: ${formData.telephone}`, 10, 60);
    doc.text(`Filière: ${formData.filiere}`, 10, 70);
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
          src="/images/genie-informatique.jpg"
          alt="Génie Informatique"
          className="filiere-header-img"
        />
        <div className="overlay">
          <h1><FaLaptopCode /> Génie Informatique</h1>
          <p className="filiere-slogan">
            💻 Développez le futur numérique avec nous, grâce à une formation riche, adaptée et orientée vers l’excellence.
          </p>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Présentation</h2>
        <p>
          Le Génie Informatique forme des professionnels capables de concevoir, développer et sécuriser des systèmes informatiques performants.
          Cette filière allie théorie, pratique, projets et stages afin de garantir une maîtrise complète des compétences numériques de demain.
        </p>
        <img
          src="/images/programming.jpg"
          alt="Présentation Génie Informatique"
          className="filiere-section-img"
        />
      </section>

      {/* OBJECTIFS DE LA FORMATION */}
      <section className="filiere-section objectifs-formation" data-aos="fade-up">
        <h2>Objectifs de la formation</h2>
        <div className="objectifs-grid">
          <div className="objectif-card" data-aos="fade-right">
            <FaBullseye className="objectif-icon" />
            <h3>Acquérir une base solide</h3>
            <p>Acquérir une solide base en programmation et en conception de systèmes.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaLightbulb className="objectif-icon" />
            <h3>Développer l’esprit d’analyse</h3>
            <p>Développer l’esprit d’analyse et de résolution de problèmes complexes.</p>
          </div>
          <div className="objectif-card" data-aos="fade-left">
            <FaBook className="objectif-icon" />
            <h3>Maîtriser les outils modernes</h3>
            <p>Maîtriser les outils modernes du numérique et des réseaux.</p>
          </div>
          <div className="objectif-card" data-aos="fade-up">
            <FaRocket className="objectif-icon" />
            <h3>Favoriser l’insertion professionnelle</h3>
            <p>Préparer l’étudiant à une insertion professionnelle rapide et efficace.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR CETTE FILIÈRE */}
      <section className="filiere-section highlights" data-aos="zoom-in">
        <h2>Pourquoi choisir cette filière ?</h2>
        <p>
          Cette filière offre un apprentissage complet et polyvalent, adapté aux besoins actuels et futurs du marché informatique.
        </p>
        <div className="highlight-grid">
          <div className="highlight-item" data-aos="fade-right">
            <FaLaptopCode className="icon" />
            <h3>Formation complète</h3>
            <p>De la programmation aux réseaux, une maîtrise totale des domaines clés de l’informatique.</p>
          </div>
          <div className="highlight-item" data-aos="fade-right">
            <FaNetworkWired className="icon" />
            <h3>Compétences réseau</h3>
            <p>Apprenez à construire et maintenir des infrastructures connectées et sécurisées.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaDatabase className="icon" />
            <h3>Maîtrise des données</h3>
            <p>Gérez, analysez et exploitez les données au cœur de la transformation numérique.</p>
          </div>
          <div className="highlight-item" data-aos="fade-left">
            <FaShieldAlt className="icon" />
            <h3>Cybersécurité</h3>
            <p>Protégez les systèmes contre les menaces et adoptez les meilleures pratiques de sécurité.</p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES ATTENDUES */}
      <section className="filiere-section competences-attendues" data-aos="fade-up">
        <div className="section-icon"><FaLightbulb /></div>
        <h2>Compétences attendues</h2>
        <ul>
          <li>Maîtriser plusieurs langages de programmation</li>
          <li>Concevoir et gérer des bases de données complexes</li>
          <li>Administrer des réseaux sécurisés</li>
          <li>Analyser des données et créer des solutions IA</li>
          <li>Appliquer les meilleures pratiques en cybersécurité</li>
        </ul>
      </section>

      {/* STAGES */}
      <section className="filiere-section stages" data-aos="fade-up">
        <h2>Stages et Immersion Professionnelle</h2>
        <p>
          Les stages sont une partie intégrante de la formation, permettant aux étudiants d’acquérir une expérience professionnelle concrète.
          D’une durée de 6 à 8 semaines, ils se déroulent dans des entreprises, administrations ou startups spécialisées en informatique.
        </p>
      </section>

      {/* DÉBOUCHÉS ET DURÉE */}
      <section className="filiere-section flex-row" data-aos="fade-up">
        <div className="debouches">
          <div className="section-icon"><FaBriefcase /></div>
          <h2>Débouchés professionnels</h2>
          <ul className="debouches-list">
            <li><FaLaptopCode /> Développeur logiciel</li>
            <li><FaNetworkWired /> Ingénieur réseau</li>
            <li><FaDatabase /> Administrateur base de données</li>
            <li><FaShieldAlt /> Spécialiste cybersécurité</li>
            <li><FaBrain /> Data analyst / IA engineer</li>
            <li><FaUserGraduate /> Consultant IT</li>
          </ul>
        </div>

        <div className="duree-formation">
          <div className="section-icon"><FaClock /></div>
          <h2>Durée de formation</h2>
          <p>BTS/DTS : 2 à 3 ans selon la spécialisation.</p>
        </div>
      </section>

      {/* CONDITIONS D’ADMISSION */}
      <section className="filiere-section" data-aos="fade-up">
        <h2>Conditions d’admission</h2>
        <p>
          L’admission en Génie Informatique est ouverte aux titulaires d’un baccalauréat scientifique ou technique.
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
                <option value="Génie Informatique">Génie Informatique</option>
                <option value="Génie Civil">Génie Civil</option>
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
            <p><strong>R :</strong> 2 à 3 ans selon la spécialisation.</p>
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

export default GenieInformatique;
