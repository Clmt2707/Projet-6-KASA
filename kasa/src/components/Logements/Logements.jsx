import React from "react";
import { Link } from "react-router-dom";
import "../Logements/Logements.scss";
import Data from '../../assets/logements/logements.json'


function Logements() {
    return (
        <section className="logements">
            <div className="logements__list">
                {Data.map((location) => (
                    <div key={location.id} className="logements__list__item">
                        <Link to={"/logement" + location.id} className="logements__list__item__cards">
                            <img src={location.cover} alt={location.description} className="logements-img"/>
                            <h2 className="logements-title">{location.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Logements