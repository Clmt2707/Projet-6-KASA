import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../assets/logements/logements.json";
import Collapse from "../Collapse/Collapse";
import "../Card/Card.scss";
import Tags from "../Tags/Tags";

function Card() {

    const { id } = useParams();

    const logement = Data.find((location) => location.id === id );

    return (
        <main className="logement">
            <section className="logement__card">
                <div className="logement__card__info">
                    <div>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                </div>
                <div className="logement__card__hostId">
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="Portrait du propriétaire"/>
                </div>
                <Tags />
            </section>
            <section className="logement__details">
                <div className="logement__details__description">
                    <Collapse title="Description"
                            text={logement.description}/>
                </div>
                <div className="logement__details__equipments"></div>
                    <Collapse title="Équipements"
                            text={logement.equipments.map((equipments, index) =>
                                <ul key={index}>
                                    <li>{equipments}</li>
                                </ul>)
                            }/>
            </section>
        </main>
    )

}

export default Card