// src/pages/Inscription.js
import React, { useState, useRef } from "react";
import axios from "axios";
import "./Inscription.css";

// Email et numéro de l’institut
const INSTITUTE_EMAIL = "ispthies@gmail.com";
const PAYMENT_NUMBER = "77 561 71 84";

export default function Inscription() {
  const formRef = useRef(null);

  // Étapes du formulaire
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fiche de renseignement
  const [fiche, setFiche] = useState({
    prenom: "", nom: "", neLe: "", a: "", adresse: "",
    bac_obtenu: "", bac_annee: "", bac_mention: "",
    etab1_annee: "", etab1_nom: "", etab1_classe: "",
    etab2_annee: "", etab2_nom: "", etab2_classe: ""
  });

  // Inscription BTS/DTS
  const [inscription, setInscription] = useState({
    filiere: "", annee: "1", nom: "", prenom: "",
    dateNaissance: "", lieuNaissance: "", adresse: "",
    telephone: "", email: "", tuteur_nom: "", tuteur_prenom: "",
    tuteur_telephone: "", modePaiement: ""
  });

  // Fichiers
  const [files, setFiles] = useState({
    diplome: null, carteIdentite: null, recuPaiement: null
  });

  // Règlement accepté
  const [reglementAccepted, setReglementAccepted] = useState(false);

  // Handlers
  const handleFicheChange = (e) => {
    const { name, value } = e.target;
    setFiche(p => ({ ...p, [name]: value }));
  };
  const handleInsChange = (e) => {
    const { name, value } = e.target;
    setInscription(p => ({ ...p, [name]: value }));
  };
  const handleFileChange = (e) => {
    const { name, files: f } = e.target;
    setFiles(p => ({ ...p, [name]: f && f[0] ? f[0] : null }));
  };

  // Navigation
  const next = () => {
    if (!validateStep(step)) return;
    setStep(s => Math.min(4, s + 1));
  };
  const prev = () => setStep(s => Math.max(1, s - 1));

  // Validation par étape
  const validateStep = (s) => {
    if (s === 1) return reglementAccepted;
    if (s === 2) {
      if (!fiche.prenom || !fiche.nom) return false;
      if (!inscription.filiere || !inscription.telephone || !inscription.email) return false;
      return true;
    }
    if (s === 3) {
      if (!files.diplome || !files.carteIdentite) return false;
      return true;
    }
    return true;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      alert("Veuillez compléter toutes les étapes obligatoires avant d'envoyer.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();

      // Ajouter les fichiers
      if (files.diplome) formData.append("diplome", files.diplome);
      if (files.carteIdentite) formData.append("carteIdentite", files.carteIdentite);
      if (files.recuPaiement) formData.append("recuPaiement", files.recuPaiement);

      // Ajouter les champs
      const allFields = { ...fiche, ...inscription };
      Object.keys(allFields).forEach(key => {
        formData.append(key, allFields[key]);
      });

      // Envoyer au serveur
      const res = await axios.post("http://localhost:5000/api/inscription", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (res.data.success) {
        alert("✅ Inscription envoyée avec succès !");
        setStep(1);
        setReglementAccepted(false);
        setFiche({
          prenom: "", nom: "", neLe: "", a: "", adresse: "",
          bac_obtenu: "", bac_annee: "", bac_mention: "",
          etab1_annee: "", etab1_nom: "", etab1_classe: "",
          etab2_annee: "", etab2_nom: "", etab2_classe: ""
        });
        setInscription({
          filiere: "", annee: "1", nom: "", prenom: "",
          dateNaissance: "", lieuNaissance: "", adresse: "",
          telephone: "", email: "", tuteur_nom: "", tuteur_prenom: "",
          tuteur_telephone: "", modePaiement: ""
        });
        setFiles({ diplome: null, carteIdentite: null, recuPaiement: null });
      } else {
        alert("Erreur d’envoi — vérifiez le serveur ou votre connexion.");
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi :", err);
      alert("Erreur d’envoi — vérifiez le serveur ou votre connexion.");
    } finally {
      setLoading(false);
    }  
};


  // progress bar percent (0..100)
  const progress = Math.round(((step - 1) / 3) * 100);

  return (
    <div className="insc-wrap">
       {/* === HEADER === */}
      <header className="insc-header">
        <div className="header-left">
          <img src="logos/institut.jpg" alt="Logo ISP" className="logo" />
          <div className="header-info">
            <h1 id="isp-name">I.S.P</h1>
            <p className="subtext">Institut Supérieur Polytechnique</p>
            <p className="address">184, boulevard Nguinth, Thiès</p>
            <p className="address">Thiès, Sénégal</p>
            <p className="Telephone">+221 77 794 95 78 / 77 398 63 63 /</p>
            <p className="Email">ispthies@gmail.com</p>
            
          </div>
        </div>
        <div className="header-right">
          <img src="images/senegal-flag.jpg" alt="Drapeau Sénégal" className="flag" />
        </div>
      </header>

      {/* === TITRE FORMULAIRE === */}
      <div className="form-title">
        Formulaire d'inscription BTS/DTS 2025-2026
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <p className="step-tag">Étape {step} / 4</p>

      <form ref={formRef} className="insc-form" onSubmit={handleSubmit}>
        <input type="hidden" name="institute_email" value={INSTITUTE_EMAIL} />


        {/* ---------- ETAPE 1: RÈGLEMENT ---------- */}
        {step === 1 && (
          <section className="step">
            <h2>Étape 1 — Règlement intérieur & conditions</h2>
            <div className="reglement-box">
              <h3>Préambule</h3>
              <p>Le présent règlement intérieur a pour objet de définir les règles de vie commune au sein de l'ISP de Thiès. Il s'applique à l'ensemble des étudiants et a valeur obligatoire. L'inscription dans l'établissement vaut acceptation et engagement à respecter strictement ses dispositions.</p>

              <h4>Article 1: Discipline et tenue vestimentaire</h4>
              <p>1. Le port de l'uniforme officiel de l'ISP est obligatoire.<br/>2. L'uniforme doit être accompagné de chaussures fermées.<br/>3. Tout manquement à cette règle entraîne l'exclusion immédiate de l'étudiant de l'établissement, sans possibilité de remboursement des frais déjà versés.</p>

              <h4>Article 2: Frais de scolarité</h4>
              <p>1. Les frais d'inscription sont non remboursables en cas de démission, d'exclusion ou d'abandon des études.<br/>2. Quelle que soit la date d'inscription, l'étudiant est tenu de payer l'intégralité du coût annuel de la scolarité.<br/>3. Les mensualités doivent être payées à l'avance et au plus tard le 5 de chaque mois. Tout retard expose l'étudiant à des sanctions, pouvant aller jusqu'à l'exclusion temporaire des cours.</p>

              <h4>Article 3: Assiduité et ponctualité</h4>
              <p>1. L'assiduité est obligatoire.<br/>2. Trois (3) absences non justifiées à trois séances de cours entraînent l'exclusion de l'examen final de la matière concernée.<br/>3. Tout retard répété et injustifié est assimilé à un manquement disciplinaire.</p>

              <h4>Article 4: Comportement général</h4>
              <p>1. Tout acte d'indiscipline, de violence, d'incivilité ou d'atteinte à la réputation de l'établissement peut entraîner l'exclusion définitive de l'ISP, sans remboursement des paiements effectués.<br/>2. Il est formellement interdit de fumer ou de consommer de l'alcool dans l'enceinte de l'établissement.<br/>3. Le respect du personnel administratif, du corps professoral et des camarades est une obligation. Tout manquement est sanctionné.</p>

              <h4>Article 5: Sanctions disciplinaires</h4>
              <p>En cas de non-respect du présent règlement, le Conseil de discipline de l'ISP se réserve le droit de prendre l'une des sanctions suivantes, en fonction de la gravité des faits : Avertissement écrit ; Exclusion temporaire ; Exclusion définitive, sans remboursement des frais de scolarité.</p>

              <p><strong>En vous inscrivant, vous acceptez sans condition le règlement intérieur de l'école notamment la discipline, le travail et la non-violence. Les frais d'inscription ne sont pas remboursables.</strong></p>
            </div>

            <label className="checkbox">
              <input type="checkbox" checked={reglementAccepted} onChange={(e) => setReglementAccepted(e.target.checked)} name="reglementAccepted" />
              <span> J'ai lu et j'accepte le règlement intérieur et les conditions d'admission</span>
            </label>

            <div className="nav">
              <button type="button" className="btn" onClick={next}>Suivant →</button>
            </div>
          </section>
        )}

        {/* ---------- ETAPE 2: FORMULAIRES ---------- */}
{step === 2 && (
  <section className="step">
    <h2>Étape 2 — Fiche de renseignement & Inscription BTS/DTS</h2>

    <h3>Fiche de renseignement</h3>
    <div className="grid">
      <label>Prénom<input name="prenom" value={fiche.prenom} onChange={handleFicheChange} /></label>
      <label>Nom<input name="nom" value={fiche.nom} onChange={handleFicheChange} /></label>
      <label>Né(e) le<input type="date" name="neLe" value={fiche.neLe} onChange={handleFicheChange} /></label>
      <label>À (lieu)<input name="a" value={fiche.a} onChange={handleFicheChange} /></label>
      <label>Adresse<input name="adresse" value={fiche.adresse} onChange={handleFicheChange} /></label>
      <label>Baccalauréat (année)<input name="bac_obtenu" value={fiche.bac_obtenu} onChange={handleFicheChange} /></label>
      <label>Mention<input name="bac_mention" value={fiche.bac_mention} onChange={handleFicheChange} /></label>
    </div>

    <h4>Établissements (2 dernières années)</h4>
    <div className="grid">
      <label>Année<input name="etab1_annee" value={fiche.etab1_annee} onChange={handleFicheChange} /></label>
      <label>Établissement<input name="etab1_nom" value={fiche.etab1_nom} onChange={handleFicheChange} /></label>
      <label>Classe<input name="etab1_classe" value={fiche.etab1_classe} onChange={handleFicheChange} /></label>
      <label>Année<input name="etab2_annee" value={fiche.etab2_annee} onChange={handleFicheChange} /></label>
      <label>Établissement<input name="etab2_nom" value={fiche.etab2_nom} onChange={handleFicheChange} /></label>
      <label>Classe<input name="etab2_classe" value={fiche.etab2_classe} onChange={handleFicheChange} /></label>
    </div>

    <h3>Formulaire d'inscription BTS/DTS</h3>
    <div className="grid">
      <label>Filière<input name="filiere" value={inscription.filiere} onChange={handleInsChange} /></label>
      <label>Année
        <select name="annee" value={inscription.annee} onChange={handleInsChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <label>Nom<input name="nom" value={inscription.nom} onChange={handleInsChange} /></label>
      <label>Prénom<input name="prenom" value={inscription.prenom} onChange={handleInsChange} /></label>
      <label>Date naissance<input type="date" name="dateNaissance" value={inscription.dateNaissance} onChange={handleInsChange} /></label>
      <label>Lieu naissance<input name="lieuNaissance" value={inscription.lieuNaissance} onChange={handleInsChange} /></label>
      <label>Dernier diplôme (intitulé)<input name="dernierDiplome_intitule" value={inscription.dernierDiplome_intitule} onChange={handleInsChange} /></label>
      <label>Obtenu en (année)<input name="dernierDiplome_obtenuEn" value={inscription.dernierDiplome_obtenuEn} onChange={handleInsChange} /></label>
      <label>Adresse<input name="adresse" value={inscription.adresse} onChange={handleInsChange} /></label>
      <label>Téléphone<input name="telephone" value={inscription.telephone} onChange={handleInsChange} /></label>
      <label>Email<input name="email" value={inscription.email} onChange={handleInsChange} /></label>
      <label>Nom tuteur<input name="tuteur_nom" value={inscription.tuteur_nom} onChange={handleInsChange} /></label>
      <label>Prénom tuteur<input name="tuteur_prenom" value={inscription.tuteur_prenom} onChange={handleInsChange} /></label>
      <label>Téléphone tuteur<input name="tuteur_telephone" value={inscription.tuteur_telephone} onChange={handleInsChange} /></label>
    </div>

    <div className="nav">
      <button type="button" className="btn light" onClick={prev}>← Précédent</button>
      <button type="button" className="btn" onClick={next}>Suivant →</button>
    </div>
  </section>
)}

        {/* ---------- ETAPE 3: JOINDRE DOCUMENTS ---------- */}
        {step === 3 && (
          <section className="step">
            <h2>Étape 3 — Joindre les documents demandés</h2>
            <p>Formats acceptés : PDF, JPG, PNG. Taille recommandée ≤ 5 Mo.</p>

            <label className="file">
              Diplôme (scan / PDF) *
              <input type="file" name="diplome" accept=".pdf,image/*" onChange={handleFileChange} required />
            </label>

            <label className="file">
              Carte d'identité légalisée *
              <input type="file" name="carteIdentite" accept=".pdf,image/*" onChange={handleFileChange} required />
            </label>

            <p>Si vous paierez par Wave ou Orange Money, vous pourrez joindre la capture du reçu à l'étape suivante (ou ici).</p>

            <div className="nav">
              <button type="button" className="btn light" onClick={prev}>← Précédent</button>
              <button type="button" className="btn" onClick={next}>Suivant →</button>
            </div>
          </section>
        )}

        {/* ---------- ETAPE 4: PAIEMENT ET ENVOI ---------- */}
        {step === 4 && (
          <section className="step">
            <h2>Étape 4 — Indications de paiement</h2>
            <p>Veuillez passer à l'école pour payer les frais d'inscription. Vous pouvez aussi payer via Wave ou Orange Money :</p>
            <ul>
              <li><strong>Wave :</strong> {PAYMENT_NUMBER}</li>
              <li><strong>Orange Money :</strong> {PAYMENT_NUMBER}</li>
            </ul>

            <label>
              Mode de paiement (si déjà payé)
              <select name="modePaiement" value={inscription.modePaiement || ""} onChange={(e) => handleInsChange(e)}>
                <option value="">-- Aucun --</option>
                <option value="Institut">Paiement à l'institut</option>
                <option value="Wave">Wave</option>
                <option value="Orange Money">Orange Money</option>
              </select>
            </label>

            {(inscription.modePaiement === "Wave" || inscription.modePaiement === "Orange Money") && (
              <label className="file">
                Téléverser la capture du reçu de paiement *
                <input type="file" name="recuPaiement" accept=".pdf,image/*" onChange={handleFileChange} required />
              </label>
            )}

            <p className="note">Tous les fichiers que vous joignez (diplôme, carte d'identité, et reçu si ajouté) seront envoyés par e-mail à l'administration pour vérification. L'admin pourra télécharger les pièces jointes depuis l'e-mail.</p>

            <div className="nav">
              <button type="button" className="btn light" onClick={prev}>← Précédent</button>
              <button type="submit" className="btn primary" disabled={loading}>{loading ? "Envoi..." : "Terminer / Envoyer"}</button>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}
