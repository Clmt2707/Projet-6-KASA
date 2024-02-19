import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Data from "../../assets/logements/logements.json";
import Collapse from "../Collapse/Collapse";
import "../Card/Card.scss";
import Tags from "../Tags/Tags";
import Rating from "../Rating/Rating";
import Carrousel from "../Carrousel/Carrousel";
import Erreur404 from "../../assets/404.png";


function Card() {

    const { id } = useParams();

    const logement = Data.find((logement) => logement.id === id );

    //Si Id est inexistant ou différent
    if(!logement) {
        return (
            <section className="error">
                <img className="error__image" src={Erreur404} alt="Erreur 404"/>
                <p className="error__content">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    Retourner sur la page d'accueil
                </NavLink>
            </section>
        )
    } else {

    return (
        <main className="logement">
            <Carrousel />
            <section className="logement__card">
                <div className="logement__card__info">
                    <div>
                        <h2>{logement.title}</h2>
                        <span>{logement.location}</span>
                    </div> 
                    <Tags />
                </div>
                <div className="logement__card__hostId">
                    <div className="logement__card__hostId__content">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="Portrait du propriétaire"/>
                    </div> 
                    <Rating starsValue={logement.rating}/>
                </div>
               
            
            </section>
            <section className="logement__details">
                <div className="logement__details__content">
                    <Collapse title="Description"
                            text={logement.description}/>
                </div>
                <div className="logement__details__content">
                    <Collapse title="Équipements"
                            text={logement.equipments.map((equipments, index) =>
                                <ul key={index}>
                                    <li>{equipments}</li>
                                </ul>)
                            }/>
                </div>
            </section>
        </main>
    )
 }
}

export default Card