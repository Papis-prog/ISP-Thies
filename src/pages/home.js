// home.js
import React, { useEffect, useState } from "react";  
import { 
  FaLaptopCode, FaUsers, FaBook, FaPhoneAlt, FaUniversity, FaCogs,
  FaBuilding, FaBolt, FaTruck, FaChartLine, FaDatabase,
  FaGraduationCap, FaTrophy, FaPercent
} from "react-icons/fa";
import Slider from "react-slick";
import AOS from "aos";
import emailjs from "emailjs-com";  
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { Link } from "react-router-dom";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
    AOS.refresh();

    try {
      emailjs.init("n32gTvpDj9Gs1gL5W");
      console.log("EmailJS initialisé ✅");
    } catch (err) {
      console.warn("Impossible d'initialiser EmailJS :", err);
    }

    document.body.style.overflowX = "hidden";

     }, []);

  // --- HERO SCROLLING BACKGROUND ---
  const heroImages = [
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/bourse.jpg",
    "/images/admission.jpg"
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 3000); // change toutes les 3 secondes
    return () => clearInterval(interval);

    
  }, []);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    telephone: "",
    filiere: ""
  });

  const [message, setMessage] = useState("");    
  const [loading, setLoading] = useState(false);

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
        filiere: ""
      });
    } catch (err) {
      console.error("Erreur envoi à l'établissement:", err);
      setMessage("Erreur lors de l'envoi à l'établissement. Voir console.");
    } finally {
      setLoading(false);
    }
  };

  const [contactData, setContactData] = useState({
    nom: "",
    email: "",
    message: ""
  });
  const [contactMessage, setContactMessage] = useState("");
  const [contactLoading, setContactLoading] = useState(false);

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactMessage("");
    setContactLoading(true);

    const templateParams = {
      from_name: contactData.nom,
      from_email: contactData.email,
      message: contactData.message
    };

    try {
      await emailjs.send(
        "service_ot2aoqy",
        "template_x855fak",
        templateParams, 
        "YgfMUUnTALADBcIn2"
      );
      setContactMessage("✅ Votre message a été envoyé avec succès !");
      setContactData({ nom: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur envoi du message :", err);
      setContactMessage("❌ Erreur lors de l'envoi du message. Voir console.");
    } finally {
      setContactLoading(false);
    }
  };

  const serviceSlides = [
    { icon: <FaBook size={40} />, title: "Programmes Académiques en BTS", text: "Cours théoriques et pratiques adaptés aux besoins du marché." },
    { icon: <FaUsers size={40} />, title: "Encadrement personnalisé", text: "Tutors, mentorat et suivi individuel pour chaque étudiant." },
    { icon: <FaLaptopCode size={40} />, title: "Insertion professionnelle", text: "Stages, partenariats avec entreprises et accompagnement à l’emploi." },
    { icon: <FaCogs size={40} />, title: "Ressources et infrastructures", text: "Bibliothèque, laboratoires, ordinateurs, Wi-Fi et plateformes pédagogiques." },
    { icon: <FaUniversity size={40} />, title: "Développement personnel", text: "Ateliers de communication, leadership et travail en équipe." },
    { icon: <FaPhoneAlt size={40} />, title: "Support administratif", text: "Gestion des inscriptions, bourses et démarches étudiantes." },
  ];

  const filieres = [
  { 
    title: "Génie Civil", 
    text: "Formation complète en construction et infrastructures.", 
    color: "#FF6F61", 
    image: "/images/Genie-civil.jpg" 
  },
  { 
    title:  "Genie Electrotechnique", 
    text: "Systèmes électroniques, circuits et automatismes.", 
    color: "#6B5B95", 
    image: "/images/Genie-electronique.jpg" 
  },
  { 
    title: "Génie Informatique", 
    text: "Développement logiciel, réseaux et cybersécurité.", 
    color: "#88B04B", 
    image: "/images/Genie-informatique.jpg" 
  },
  { 
    title: "Transport - Logistique", 
    text: "Gestion du transport et optimisation des flux.", 
    color: "#FFA500", 
    image: "/images/Transport-logistique.jpg" 
  },
  { 
    title: "Comptabilite-Gestion", 
    text: "Comptabilité, finance et management.", 
    color: "#00BFFF", 
    image: "/images/comptable.jpg" 
  },
  { 
    title: "Informatique de Gestion", 
    text: "Logiciels de gestion et ERP pour entreprises.", 
    color: "#FF69B4", 
    image: "/images/Informatique-gestion.jpg" 
  },
];


  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
  };

  const partners = [
    { src: "/logos/logo-4.jpg", name: "IUT - Université de Thiès" },
    { src: "/logos/logo-1.jpg", name: "École Supérieure Polytechnique - UCAD" },
    { src: "/logos/logo-3.jpg", name: "UFR Sciences et Technologie - Thiès" },
    { src: "/logos/logo-3.jpg", name: "UFR Sciences Économiques et Sociales - Thiès" },
    { src: "/logos/logo-1.jpg", name: "Faculté des Sciences Économiques et de Gestion - UCAD" },
    { src: "/logos/logo-1.jpg", name: "Faculté des Sciences et Techniques - UCAD" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
   <div className="App">
     {/* HERO SCROLLING BACKGROUND */}
<header
  id="home"
  className="hero"
  style={{
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflowX: "hidden",
    textAlign: "center",
    padding: "100px 0"
  }}
>
  {/* Arrière-plan qui défile */}
  {["/images/image-3.jpg", "/images/image-4.jpg", "/images/diplome-2.jpg", "/images/.jpg"].map((img, i) => (
    <div
      key={i}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: i === current ? 1 : 0,
        transition: "opacity 1.5s ease-in-out",
        zIndex: 0
      }}
    ></div>
  ))}

  {/* Overlay sombre */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255,255,255,0.2)",
      zIndex: 1
    }}
  ></div>

  {/* Contenu texte */}
  <div style={{ position: "relative", zIndex: 2, marginTop: "150px" }}>
    <h1 style={{ 
        fontSize: "3rem", 
        fontWeight: "bold", 
        color: "#fff", 
        textShadow: "2px 2px 12px rgba(0,0,0,0.7)" 
    }}>
      Bienvenue à l’ISP
    </h1>
    <p style={{ 
        fontSize: "1.2rem", 
        maxWidth: "800px", 
        margin: "20px auto", 
        color: "#fff", 
        textShadow: "1px 1px 8px rgba(0,0,0,0.7)" 
    }}>
      Offrant une formation complète en BTS pour former les leaders de demain,
      notre institut vous accompagne dans votre réussite académique et professionnelle.
    </p>
    <a 
      href="#filieres"
      style={{
        marginTop: "20px",
        padding: "12px 25px",
        backgroundColor: "#330be4ff",
        color: "#fff",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#e5a606ff";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#2321a8f8";
        e.target.style.transform = "scale(1)";
      }}
    >
      Découvrir nos filières
    </a>
  </div>
</header>

      {/* À propos */}
      <section id="about" className="section about" style={{backgroundColor:"#e8f0fe"}}>
        <h2><FaUniversity /> À propos de nous</h2>
        <p>Découvrez notre mission, nos valeurs et nos infrastructures modernes.</p>
        <div className="about-container">
          <div className="about-cards">
            <div className="about-card" data-aos="fade-up">
              <h3>Historique & Mission</h3>
              <p>Fondé pour répondre aux besoins croissants en formation professionnelle, l’ISP s’engage à fournir des programmes BTS de qualité.</p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay={200}>
              <h3>Valeurs & Objectifs</h3>
              <p>Excellence académiques, innovation pédagogique et accompagnement personnalisé sont au cœur de notre approche éducative.</p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay={400}>
              <h3>Infrastructures Modernes</h3>
              <p>Bibliothèques, laboratoires modernes et un suivi individualisé garantissent un apprentissage optimal.</p>
            </div>
          </div>
          <div className="about-icons">
            <Slider {...settings}>
              {serviceSlides.map((s, i) => (
                <div key={i} className="icon-slide">{s.icon}</div>
              ))}
            </Slider>
            {/* ➡ Ici on ajoute l'image fixe sous les icônes */}
  <div className="about-image" style={{ marginTop: "20px" }}>
    <img 
      src="/images/image-1.jpg" 
      alt="À propos" 
      style={{ width: "85%", maxHeight: "600px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }} 
    />
    </div>
   </div>
    </div>
        <div className="section-btn">
          <Link to="/apropos" className="btn">Voir plus</Link>
        </div>
      </section>

     {/* Filières */}
<section id="filieres" className="section filieres" style={{backgroundColor:"#f0f8ff"}}>
  <h2><FaBook /> Nos Filières</h2>
  <p>Explorez toutes les filières disponibles à l’ISP pour votre avenir.</p>

  <div className="filieres-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
    {filieres.map((filiere, i) => (
      <Link
        key={i}
        to={`/filieres/${filiere.title
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
  .toLowerCase()
  .replace(/\s+/g, "-")}`} 

        className="filiere-card"
        style={{
          position: "relative",
          height: "250px",
          borderRadius: "12px",
          overflow: "hidden",
          textDecoration: "none",
          color: "#fff",
          display: "flex",
          alignItems: "flex-end"
        }}
        data-aos="fade-up"
        data-aos-delay={i * 300}
      >
        <img
          src={filiere.image}
          alt={filiere.title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            background: "rgba(0,0,0,0.5)",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h3 style={{ margin: 0 }}>{filiere.title}</h3>
          <span style={{ fontSize: "1.5rem" }}>➡</span>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* Services */}
      <section id="services" className="section services" style={{backgroundColor:"#fef8e8"}}>
        <h2><FaCogs /> Nos Services</h2>
        <p>Nos services sont conçus pour accompagner chaque étudiant dans son parcours.</p>
        <div className="filieres-container">
          {serviceSlides.map((s, i) => (
            <div key={i} className="filiere" style={{ backgroundColor: "#ffffff", color:"#003366" }} data-aos="zoom-in" data-aos-delay={i * 250}>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="services-slider">
          <Slider {...settings}>
            {serviceSlides.map((s, i) => (
              <div key={i} className="icon-slide">{s.icon}</div>
            ))}
          </Slider>
        </div>
        <div className="section-btn">
            <Link to="/services" className="btn">Voir tous les services</Link>
        </div>
      </section>

      {/* --- Nouvelle section : Résultats BTS 2024 --- */}
      <section ref={ref} id="results" style={{background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", color: "white", padding: "60px 20px", textAlign: "center"}}>
        <h2 style={{ marginBottom: "40px", fontSize: "2rem", fontWeight: "bold" }}>Résultats officiel de L'institut A l'Examen National Du BTS 2024</h2>
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "40px"}}>
          <div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}>
              <FaGraduationCap /> {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h3>
            <p>Génie Civil (13 candidats, 7 mentions)</p>
          </div>
          <div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}>
              <FaTrophy /> {inView && <CountUp end={90} duration={3} suffix="%" />}
            </h3>
            <p>Électrotechnique (30 candidats, 15 mentions)</p>
          </div>
          <div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}>
              <FaUsers /> {inView && <CountUp end={43} duration={3} />}
            </h3>
            <p>Candidats présentés (40 admis, 3 échecs)</p>
          </div>
          <div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}>
              <FaPercent /> {inView && <CountUp end={93} duration={3} suffix="%" />}
            </h3>
            <p>Taux global de réussite</p>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section id="partners" className="section partners" style={{backgroundColor:"#f8f8f8", padding:"40px"}}>
        <h2 style={{textAlign:"center", marginBottom:"20px"}}>Nos Partenaires</h2>

        {/* Deux pistes horizontales qui défilent en continu */}
        <div style={{ overflow: "hidden" }}>
          {/* Piste du haut (gauche → droite visualisé comme gauche à droite movement) */}
          <div style={{ marginBottom: 16, overflow: "hidden" }}>
            <div
              className="partners-track"
              style={{
                display: "inline-flex",
                alignItems: "center",
                animation: "scroll-left 20s linear infinite"
              }}
            >
              {partners.concat(partners).map((partner, index) => (
                <div key={`top-${index}`} style={{ textAlign: "center", minWidth: 220, margin: "0 28px" }}>
                  <img src={partner.src} alt={partner.name} style={{ maxWidth: 140, height: "auto", display: "block", margin: "0 auto" }} />
                  <p style={{ marginTop: 10, fontWeight: "bold", whiteSpace: "normal" }}>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Piste du bas (sens opposé pour dynamisme) */}
          <div style={{ overflow: "hidden" }}>
            <div
              className="partners-track"
              style={{
                display: "inline-flex",
                alignItems: "center",
                animation: "scroll-right 24s linear infinite"
              }}
            >
              {partners.concat(partners).map((partner, index) => (
                <div key={`bottom-${index}`} style={{ textAlign: "center", minWidth: 220, margin: "0 28px" }}>
                  <img src={partner.src} alt={partner.name} style={{ maxWidth: 140, height: "auto", display: "block", margin: "0 auto" }} />
                  <p style={{ marginTop: 10, fontWeight: "bold", whiteSpace: "normal" }}>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Styles d'animation locaux (autonomes dans ce composant) */}
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @media (max-width: 768px) {
            .partners-track > div { min-width: 160px !important; margin: 0 16px !important; }
          }
        `}</style>
      </section>

      {/* Inscription */}
<section id="inscription" className="section inscription" style={{ backgroundColor: "#e6f7ff" }}>
  <h2><FaBook /> Formulaire d’inscription</h2>
  <p>Remplissez ce formulaire pour vous inscrire facilement.</p>

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

  <form onSubmit={handleSubmit}>
    <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
    <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
    <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
    <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
    <select name="filiere" value={formData.filiere} onChange={handleChange} required>
      <option value="">Choisir une filière</option>
      <option value="Génie Civil">Génie Civil</option>
      <option value="Génie Électrotechnique">Génie Électrotechnique</option>
      <option value="Génie Informatique">Génie Informatique</option>
      <option value="Transport - Logistique">Transport - Logistique</option>
      <option value="Comptabilite Gestion"> Comptabilite Gestion</option>
      <option value="Informatique de Gestion">Informatique de Gestion</option>
    </select>
    <button type="submit" className="btn" disabled={loading}>
      {loading ? "Envoi..." : "S’inscrire"}
    </button>
  </form>

  {message && (
    <p style={{ marginTop: "12px", color: message.startsWith("Erreur") ? "red" : "green" }}>
      {message}
    </p>
  )}
</section>
       {/* Contact */}
      <section id="contact" className="section contact" style={{backgroundColor:"#f5e6ff"}}>
        <h2><FaPhoneAlt /> Contact</h2>
        <p>Contactez-nous pour toutes informations ou assistance.</p>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Infos de contact</h3>
            <p>Téléphone : +221 77 123 45 67</p>
            <p>Email : ispthies@gmail.com</p>
            <p>Adresse : Thiès, Sénégal</p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleContactSubmit}>
              <input type="text" name="nom" placeholder="Nom complet" value={contactData.nom} onChange={handleContactChange} required />
              <input type="email" name="email" placeholder="Email" value={contactData.email} onChange={handleContactChange} required />
              <textarea name="message" placeholder="Votre message" value={contactData.message} onChange={handleContactChange} required></textarea>
              <button type="submit" className="btn" disabled={contactLoading}>
                {contactLoading ? "Envoi..." : "Envoyer"}
              </button>
            </form>
            {contactMessage && (
              <p style={{ marginTop: "12px", color: contactMessage.startsWith("❌") ? "red" : "green" }}>
                {contactMessage}
              </p>
            )}
          </div>
        </div>
      </section>

                {/* Footer */}
      <footer className="footer" style={{ backgroundColor: "#17024cff", color: "#fff", padding: "40px 20px" }}>
        <div className="footer-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          
          {/* Logo & présentation */}
          <div>
            <img src="/logos/institut.jpg" alt="Institut" style={{ width: "120px", marginBottom: "15px" }} />
            <p>
              Institut Supérieur Polytechnique (ISP) — Former des leaders compétents, innovants et engagés pour le développement.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>Liens rapides</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>À propos</a></li>
              <li><a href="#filieres" style={{ color: "#fff", textDecoration: "none" }}>Filières</a></li>
              <li><a href="#services" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
              <li><a href="#results" style={{ color: "#fff", textDecoration: "none" }}>Résultats</a></li>
              <li><a href="#partners" style={{ color: "#fff", textDecoration: "none" }}>Partenaires</a></li>
              <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>Contact</h3>
            <p><strong>Adresse:</strong> 184, boulevard Nguinth, Thiès</p>
            <p><strong>Tél:</strong> +221 77 794 95 78 / 77 398 63 63 / </p>
            <p><strong>Email:</strong> ispthies@gmail.com</p>
          </div>

          {/* Map */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>Nous trouver</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.098304203011!2d-16.933!3d14.783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ3JzAwLjgiTiAxNsKwNTYnMDAuOCJX!5e0!3m2!1sfr!2ssn!4v1696167315487!5m2!1sfr!2ssn"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Réseaux sociaux avec logos cliquables */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a 
            href="https://www.facebook.com/Institut-superieur-polytechnique-de-thies" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ margin: "0 10px" }}
          >
            <img src="/logos/facebook-logo.webp" alt="Facebook-logo" style={{ width: "40px" }} />
          </a>

          <a 
            href="https://wa.me/221777949578" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ margin: "0 10px" }}
          >
            <img src="/logos/whatsapp-logo.jpeg" alt="WhatsApp-logo" style={{ width: "40px" }} />
          </a>

          <a 
            href="https://www.instagram.com/isp_thies" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ margin: "0 10px" }}
          >
            <img src="/logos/instagram-logo.webp" alt="Instagram-logo" style={{ width: "40px" }} />
          </a>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          © {new Date().getFullYear()} Institut Supérieur Polytechnique (ISP) - Tous droits réservés.
        </p>
      </footer>
      </div>
  );    
}

export default App;


