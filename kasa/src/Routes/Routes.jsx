import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

//PAGES
import Accueil from "../pages/Accueil/Accueil";
import APropos from "../pages/A propos/APropos";
import FicheLogement from "../pages/ficheLogement/FicheLogement";
import Error from "../pages/Erreur 404/Erreur404";

 


function RoutesPath() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Accueil />}/>
                <Route path="/apropos" element={<APropos />}/>
                <Route path="/logement/:id" element={<FicheLogement />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </Router>
    )
}

export default RoutesPath