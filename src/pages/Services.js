import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookOpen, FaHome, FaGraduationCap, FaHandshake } from "react-icons/fa";
import "./nosservices.css";

function NosServices() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="services-page">
      {/* Retour */}
      <Link to="/" className="back-home-top">← Accueil</Link>

      {/* HEADER */}
      <header className="services-header" data-aos="fade-down">
        <div className="header-content">
          <h1>Nos Services</h1>
          <p className="subtitle">
            Découvrez les différents services et accompagnements offerts par l’Institut Supérieur Polytechnique de Thiès.
          </p>
        </div>
      </header>

      {/* Section Programme */}
      <section className="service-section" data-aos="fade-up">
        <div className="service-icon"><FaBookOpen /></div>
        <div className="service-body">
          <h2>Programme</h2>
          <p>
            À l’issue de deux années de formation après le bac, l’étudiant de l’ISP passe l’examen national du BTS (Brevet de Technicien Supérieur). Ce diplôme d’État est obtenu en cas de réussite à l’examen.
          </p>
          <p>
            En parallèle, un DTS (Diplôme de Technicien Supérieur) est délivré aux étudiants réussissant les examens internes de l’ISP.
          </p>
          <p>Le programme comprend :</p>
          <ul>
            <li>Des cours magistraux, travaux dirigés, travaux pratiques et travaux personnels d’étudiant, représentant environ 2000 heures pour le BTS.</li>
            <li>Un stage en entreprise d’une durée de 30 à 45 jours.</li>
          </ul>
        </div>
      </section>

      {/* Section Diplômes */}
      <section className="service-section reverse" data-aos="fade-up">
        <div className="service-body">
          <h2>Diplômes</h2>
          <p>
            Pour obtenir le BTS, l’étudiant doit réussir un examen organisé au niveau national par le Ministère en charge de la formation professionnelle.
          </p>
          <p>
            La préparation au BTS à l’Institut Supérieur Polytechnique (ISP) de Thiès s’adresse aux étudiants souhaitant une formation concrète, axée sur la vie professionnelle, en adéquation avec le marché du travail et les attentes des employeurs.
          </p>
          <p>
            Durant leur cursus, les étudiants suivent des cours théoriques et des travaux pratiques. Le contenu est conçu pour suivre les évolutions des secteurs et répondre aux besoins des entreprises, assurant ainsi une parfaite adéquation formation‑emploi.
          </p>
          <p>
            Les titulaires du BTS disposent de nombreux débouchés et perspectives de carrière : intégrer directement le monde professionnel ou poursuivre leurs études.
          </p>
          <p>
            Les diplômés de l’ISP de Thiès peuvent, après un BTS, intégrer :
          </p>
          <ul>
            <li>L’université pour des licences ou masters</li>
            <li>Des écoles d’ingénieurs</li>
          </ul>
          <p>Parmi les établissements possibles :</p>
          <ul>
            <li>École Supérieure Polytechnique de l’UCAD de Dakar</li>
            <li>UFR Science de l’Ingénieur de l’UIDT de Thiès</li>
            <li>Institut Universitaire de Technologie de l’UIDT de Thiès</li>
            <li>Institut Supérieur Polytechnique de l’UGB de Saint-Louis</li>
          </ul>
          <p>
            Le BTS étant reconnu à l’international, les titulaires peuvent également envisager de poursuivre leurs études à l’étranger.
          </p>
        </div>
        <div className="service-image">
          <img src="/images/diplome-2.jpg" alt="Diplômes ISP" />
        </div>
      </section>

      {/* Section Autres Services */}
      <section className="service-section services-extra" data-aos="fade-up">
        <div className="service-body full-width">
          <h2>Autres services</h2>
          <p>
            L’ISP propose un accompagnement global : encadrement pédagogique, tutorat, accès à des ressources documentaires (bibliothèque, bases numériques),
            ateliers de renforcement et formation continue pour professionnels. Nous entretenons également des relations étroites avec des entreprises
            pour faciliter les stages et l’insertion.
          </p>
          <p>
            Un service d’orientation professionnelle aide les étudiants à préparer CV, entretiens et à trouver des opportunités de stages ou d’emploi.
            Des actions d’appui (ateliers métiers, mentorat, forums entreprise) sont organisées régulièrement.
          </p>
        </div>
      </section>

      {/* Section Logement */}
      <section className="service-section reverse mission-logement" data-aos="fade-up">
        <div className="service-image">
          <img src="/images/logement.jpg" alt="Logement étudiant ISP" />
        </div>
        <div className="service-body">
          <h2>Logement étudiant</h2>
          <p>
            L’Institut Supérieur Polytechnique de Thiès met à disposition des logements confortables et sécurisés à proximité du campus.
            Ces résidences offrent un environnement propice aux études et à la vie communautaire.
          </p>
          <p>
            <strong>Services compris :</strong> eau et électricité incluses dans les frais de logement.  
            <strong>Services non compris :</strong> la nourriture n’est pas incluse et reste à la charge de l’étudiant.
          </p>
          <p>
            Les conditions (tarifs, disponibilités, règles de vie) sont précisées lors de l’inscription ou sur demande auprès du service administratif.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer" data-aos="fade-up">
        <div className="footer-content">
          <div className="footer-left">
            <p><strong>Email :</strong> ispthies@gmail.com</p>
            <p><strong>Adresse:</strong> 184, boulevard Nguinth, Thiès</p>
            <p><strong>Adresse :</strong> Rue de l’Institut, Thiès, Sénégal</p>
            <p><strong>Téléphone :</strong> +221 77 794 95 78 / 77 398 63 63</p>
          </div>
          <div className="footer-links">
            <Link to="/">Accueil</Link>
            <Link to="/apropos">À propos</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Institut Supérieur Polytechnique de Thiès (ISP). Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default NosServices;
