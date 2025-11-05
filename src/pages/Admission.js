import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./admission.css";

function Admission() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="admission-page">

      {/* Bouton retour à l’accueil */}
      <Link to="/" className="back-home-top">
        ← Accueil
      </Link>

      {/* TITRE PAGE */}
      <header className="admission-header" data-aos="fade-down">
        <h1>Admission & Bourses</h1>
        <p>Institut Supérieur Polytechnique de Thiès (ISP)</p>
      </header>

      {/* CONDITIONS D’ADMISSION */}
      <section className="admission-section" data-aos="fade-up">
        <div className="admission-image">
          <img src="/images/admission.jpg" alt="Conditions d'admission" />
        </div>
        <div className="admission-text">
          <h2>Conditions d’admission</h2>
          <ul>
            <li>1 photocopie légalisée du BAC ou BT</li>
            <li>Photocopie légalisée de la carte d’identité</li>
            <li>2 photos</li>
            <li>Remplir le formulaire d'inscription</li>
            <li>10 mensualités de 37 500 F CFA</li>
            <li>Payer 75 000 F CFA pour les frais d'inscription</li>
            <li>Pas de concours d'entrée</li>
          </ul>
        </div>
      </section>

      {/* BOURSES */}
      <section className="admission-section reverse" data-aos="fade-up">
        <div className="admission-image">
          <img src="/images/bourse.jpg" alt="Bourses ISP" />
        </div>
        <div className="admission-text">
          <h2>Bourses</h2>
          <p>
            Obtenez une bourse d'études grâce à l'interface Sénégal pour intégrer
            l’Institut Supérieur Polytechnique de Thiès (ISP).
          </p>
          <h3>Candidature</h3>
          <p>Envoyez les documents suivants :</p>
          <ul>
            <li>Une photocopie du Baccalauréat</li>
            <li>Une photocopie de votre carte d’identité</li>
            <li>Une page indiquant la formation demandée et votre numéro WhatsApp</li>
          </ul>
          <p>
            Transmettez l'ensemble des pièces via WhatsApp à l'interface SENEGAL.
          </p>
        </div>
      </section>

      {/* FLECHE DE RETOUR EN HAUT */}
      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>

      {/* FOOTER */}
      <footer className="admission-footer">
        <div className="footer-contact">
          <h3>Contactez-nous</h3>
          <form className="contact-form">
            <input type="text" placeholder="Nom complet" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        {/* Adresse / contact */}
        <div className="footer-info">
          <p>📍 Adresse : Rue de l’Institut Supérieur Polytechnique, Thiès, Sénégal</p>
          <p><strong>Adresse:</strong> 184, boulevard Nguinth, Thiès</p>
          <p>📧 Email : ispthies@gmail.com</p>
          <p>📞 Téléphone : +221 77 794 95 78 / 77 398 63 63</p>
        </div>

        <p>© 2025 Institut Supérieur Polytechnique de Thiès (ISP). Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Admission;
