import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../assets/logements/logements.json";
import Collapse from "../Collapse/Collapse";
import "../Card/Card.scss";
import Tags from "../Tags/Tags";
import Rating from "../Rating/Rating";
import Slideshow from "../Carrousel/Carrousel";


function Card() {

    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id );

    return (
        <main className="logement">
            <Slideshow />
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
                            text={
                                <ul>
                                    {logement.equipments.map((equipments, index) => 
                                        <li key={index}>
                                            {equipments}
                                        </li>)}
                                </ul>
                            }/>
                </div>
            </section>
        </main>
    )
}

export default Card