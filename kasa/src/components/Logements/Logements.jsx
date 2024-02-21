import React from "react";
import { Link } from "react-router-dom";
import "../Logements/Logements.scss";
import Data from '../../assets/logements/logements.json'


function Logements() {
    return (
        <section className="logements">
            <div className="logements__list">
                {Data.map((logement) => (
                    <div key={logement.id} className="logements__list__item">
                        <Link to={"/logement/" + logement.id} className="logements__list__item__cards">
                            <img src={logement.cover} alt={logement.description} className="logements-img"/>
                            <h2 className="logements-title">{logement.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Logements