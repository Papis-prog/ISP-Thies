import React from "react";
import { Link } from "react-router-dom";

function Filieres() {
  const filieres = [
    { name: "Génie Civil", path: "/filieres/genie-civil" },
    { name: "Génie Électronique", path: "/filieres/genie-electronique" },
    { name: "Génie Informatique", path: "/filieres/genie-informatique" },
    { name: "Transport - Logistique", path: "/filieres/transport-logistique" },
    { name: "Gestion Financière", path: "/filieres/gestion-financiere" },
    { name: "Informatique de Gestion", path: "/filieres/informatique-de-gestion" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1>Nos Filières</h1>
      <p>Découvrez nos filières spécialisées pour bâtir votre avenir.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filieres.map((filiere, i) => (
          <li key={i} style={{ margin: "10px 0" }}>
            <Link to={filiere.path} style={{ color: "blue", textDecoration: "underline" }}>
              {filiere.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filieres;
