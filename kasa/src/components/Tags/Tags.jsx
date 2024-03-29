import React from "react";
import { useParams } from "react-router-dom";
import "../Tags/Tags.scss";
import Data from "../../assets/logements/logements.json";


function Tags() {
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id);

    return (
        <div className="tags">
                {logement.tags.map((tag, index) => (
                    <p className="tags__item" key={index}>{tag}</p>
                ))}
        </div>
        )
}

export default Tags