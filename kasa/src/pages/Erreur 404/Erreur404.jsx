import React from "react";
import "../Erreur 404/Erreur404.scss";
import Erreur404 from "../../assets/404.png";
import { NavLink } from "react-router-dom";
import Layout from "../../Layouts/Layout";

function Error() {
    return (
        <Layout>
            <main className="error">
                <img className="error__image" src={Erreur404} alt="Erreur 404"/>
                <p className="error__content">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    Retourner sur la page d'accueil
                </NavLink>
            </main>
        </Layout>
    )
}

export default Error