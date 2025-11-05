import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./apropos.css";

function Apropos() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="apropos-page">
      {/* Flèche de retour */}
      <Link to="/" className="back-home-top">← Accueil</Link>

      {/* Header professionnel */}
      <header className="apropos-header" data-aos="fade-down">
        <div className="header-content">
          <h1>À propos de l’Institut Supérieur Polytechnique de Thiès (ISP)</h1>
          <p>
            L’ISP est dédié à l’excellence académique et professionnelle. Nous formons des étudiants compétents, 
            innovants et capables de contribuer au développement socio-économique du Sénégal.
          </p>
          <Link to="/services" className="btn-nos-services">Nos Services</Link>
        </div>
      </header>

      {/* Présentation */}
      <section className="apropos-section" data-aos="fade-up">
        <div className="apropos-text">
          <h2>Présentation</h2>
          <p>
            Fondé avec la vision de renforcer le système éducatif sénégalais, l’Institut Supérieur Polytechnique de Thiès (ISP) propose un enseignement de qualité,
            intégrant à la fois la théorie et la pratique. Nos formations sont conçues pour répondre aux besoins du marché et permettre à nos étudiants
            de devenir des leaders dans leurs domaines respectifs.
          </p>
          <p>
            Nous privilégions un cadre d’apprentissage dynamique, favorisant l’innovation, l’esprit critique et l’engagement social. 
            L’ISP dispose d’installations modernes, de laboratoires bien équipés et d’un réseau solide de partenariats académiques et industriels.
          </p>
        </div>
        <div className="apropos-image">
          <img src="/images/image-2.jpg" alt="Présentation Institut" />
        </div>
      </section>

      {/* Mission (image à gauche) */}
      <section className="apropos-section mission" data-aos="fade-up">
        <div className="apropos-image">
          <img src="/images/image-4.jpg" alt="Notre Mission" />
        </div>
        <div className="apropos-text">
          <h2>Notre Mission</h2>
          <p>
            Offrir une formation académique de haut niveau qui prépare les étudiants à exceller dans leurs carrières tout en contribuant au développement
            économique et social de la région. Nous visons à former des professionnels compétents, éthiques et engagés.
          </p>
          <p>
            Notre mission repose sur trois piliers : la qualité de l’enseignement, l’innovation technologique et le service à la communauté. 
            À travers ces valeurs, l’ISP s’efforce de créer un environnement d’apprentissage inclusif, stimulant et tourné vers l’avenir.
          </p>
        </div>
      </section>

      {/* Partenaires */}
      <section className="apropos-section partenaires" data-aos="fade-up">
        <h2>Nos Partenaires</h2>
        <p className="partenaires-description">
          L’Institut Supérieur Polytechnique de Thiès (ISP) s’appuie sur un réseau solide de partenaires nationaux 
           , issus aussi bien du monde académique que du secteur industriel. 
          Ces collaborations stratégiques visent à renforcer la qualité de nos formations, 
          encourager la recherche appliquée et offrir à nos étudiants des opportunités concrètes 
          de stages, d’échanges et d’insertion professionnelle.  
          <br /><br />
          Grâce à ces partenariats, l’ISP participe activement à des programmes d’innovation, 
          à des projets technologiques collaboratifs et à des initiatives de développement durable.  
          Ensemble, nous bâtissons un environnement d’apprentissage moderne, ouvert sur le monde, 
          où l’excellence et la coopération sont au cœur de notre engagement éducatif.
        </p>

        <div className="partenaires-logos" data-aos="fade-up">
          <img src="/logos/logo-1.jpg" alt="Partenaire 1" />
          <img src="/logos/logo-2.jpg" alt="Partenaire 2" />
          <img src="/logos/logo-3.jpg" alt="Partenaire 3" />
          <img src="/logos/logo-4.jpg" alt="Partenaire 4" />
        </div>
      </section>

      {/* Statistiques */}
      <section className="apropos-stats" data-aos="fade-up">
        <div className="stats-container">
          <div className="stat-item">
            <h3>95%</h3>
            <p>Taux de réussite annuel</p>
          </div>
          <div className="stat-item">
            <h3>+1200</h3>
            <p>Diplômés depuis notre création</p>
          </div>
          <div className="stat-item">
            <h3>+15%</h3>
            <p>Évolution annuelle des inscriptions</p>
          </div>
        </div>
      </section>

      {/* Footer élégant */}
      <footer className="apropos-footer">
        <div className="footer-content">
          <div className="footer-info">
            <p><strong>Email :</strong> ispthies@gmail.com</p>
            <p><strong>Adresse :</strong> Rue de l’Institut, Thiès, Sénégal</p>
            <p><strong>Adresse:</strong> 184, boulevard Nguinth, Thiès</p>
            <p><strong>Téléphone :</strong> +221 77 794 95 78 / 77 398 63 63</p>
          </div>
          <div className="footer-rights">
            © 2025 Institut Supérieur Polytechnique de Thiès (ISP). Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Apropos;
