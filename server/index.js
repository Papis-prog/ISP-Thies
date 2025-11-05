require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Vérifie si le dossier 'uploads' existe sinon le créer
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Configuration Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage: storage });

// Route test serveur
app.get("/", (req, res) => {
  res.send("✅ Serveur fonctionne correctement !");
});

// Route inscription avec envoi d’email et fichiers joints
app.post(
  "/api/inscription",
  upload.fields([
    { name: "diplome", maxCount: 1 },
    { name: "carteIdentite", maxCount: 1 },
    { name: "recuPaiement", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        prenom,
        nom,
        neLe,
        a,
        adresse,
        bac_obtenu,
        bac_annee,
        bac_mention,
        etab1_annee,
        etab1_nom,
        etab1_classe,
        etab2_annee,
        etab2_nom,
        etab2_classe,
        filiere,
        annee,
        dateNaissance,
        lieuNaissance,
        telephone,
        email,
        tuteur_nom,
        tuteur_prenom,
        tuteur_telephone,
        modePaiement,
      } = req.body;

      // Création du transporteur Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // mot de passe d'application Gmail
        },
      });

      // Construction du message
      const message = `
        <h2>Nouvelle inscription reçue</h2>
        <h3>Fiche de renseignement</h3>
        <p><b>Prénom :</b> ${prenom}</p>
        <p><b>Nom :</b> ${nom}</p>
        <p><b>Né(e) le :</b> ${neLe}</p>
        <p><b>À :</b> ${a}</p>
        <p><b>Adresse :</b> ${adresse}</p>
        <p><b>Baccalauréat :</b> ${bac_obtenu} (${bac_annee}) - Mention : ${bac_mention}</p>
        <h4>Établissements (2 dernières années)</h4>
        <p>${etab1_annee} - ${etab1_nom} - ${etab1_classe}</p>
        <p>${etab2_annee} - ${etab2_nom} - ${etab2_classe}</p>
        <h3>Inscription BTS/DTS</h3>
        <p><b>Filière :</b> ${filiere} - Année : ${annee}</p>
        <p><b>Date de naissance :</b> ${dateNaissance}</p>
        <p><b>Lieu de naissance :</b> ${lieuNaissance}</p>
        <p><b>Téléphone :</b> ${telephone}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Tuteur :</b> ${tuteur_nom} ${tuteur_prenom} - Téléphone : ${tuteur_telephone}</p>
        <p><b>Mode de paiement :</b> ${modePaiement || "Non précisé"}</p>
      `;

      // Préparer les fichiers joints
      const attachments = [];
      if (req.files["diplome"])
        attachments.push({
          filename: req.files["diplome"][0].originalname,
          path: path.join(__dirname, req.files["diplome"][0].path),
        });
      if (req.files["carteIdentite"])
        attachments.push({
          filename: req.files["carteIdentite"][0].originalname,
          path: path.join(__dirname, req.files["carteIdentite"][0].path),
        });
      if (req.files["recuPaiement"])
        attachments.push({
          filename: req.files["recuPaiement"][0].originalname,
          path: path.join(__dirname, req.files["recuPaiement"][0].path),
        });

      // Envoi de l’email
      await transporter.sendMail({
        from: `"Institut Sup" <${process.env.EMAIL_USER}>`,
        to: process.env.INSTITUTE_EMAIL || process.env.EMAIL_USER,
        subject: "Nouvelle inscription en ligne",
        html: message,
        attachments,
      });

      res.json({ success: true, message: "Inscription envoyée avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      res
        .status(500)
        .json({ success: false, message: "Erreur d’envoi. Vérifiez serveur et connexion." });
    }
  }
);

// --- SERVIR LE FRONTEND REACT ---
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// --- DEMARRAGE SERVEUR ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
