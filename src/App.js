// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages principales
import Home from "./pages/home";
import Apropos from "./pages/A propos";
import Services from "./pages/Services";
import Filieres from "./pages/Filieres";
import Admission from "./pages/Admission"; // ajouté

// Sous-pages Filières
import GenieCivil from "./pages/filieres/GenieCivil";
import GenieElectrotechnique from "./pages/filieres/GenieElectrotechnique";
import GenieInformatique from "./pages/filieres/GenieInformatique";
import TransportLogistique from "./pages/filieres/TransportLogistique";
import ComptabiliteGestion from "./pages/filieres/ComptabiliteGestion";
import InformatiqueDeGestion from "./pages/filieres/InformatiqueDeGestion";


// Page Inscription
import Inscription from "./pages/inscription";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<Home />} />

        {/* Pages séparées */}
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/filieres" element={<Filieres />} />
        <Route path="/admission" element={<Admission />} />

        {/* Page Inscription */}
        <Route path="/inscription" element={<Inscription />} />
        
        
        {/* Sous-pages Filières */}
        <Route path="/filieres/genie-civil" element={<GenieCivil />} />
        <Route path="/filieres/genie-electrotechnique" element={<GenieElectrotechnique />} />
        <Route path="/filieres/genie-informatique" element={<GenieInformatique />} />
        <Route path="/filieres/transport-logistique" element={<TransportLogistique />} />
        <Route path="/filieres/comptabilite-gestion" element={<ComptabiliteGestion />} />
        <Route path="/filieres/informatique-de-gestion" element={<InformatiqueDeGestion />} />
      </Routes>
    </Router>
  );
}

export default App;
