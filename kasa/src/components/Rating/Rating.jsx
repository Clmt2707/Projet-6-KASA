import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import "../Rating/Rating.scss";

const Rating = ( props ) => {
    const starsValue = props.starsValue;
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="ratings">
            {stars.map((starsElem) => 
                starsValue >= starsElem ? 
                    <span key={starsElem.toString()} className="ratings__stars">
                        <FontAwesomeIcon icon={faStar} />
                    </span> : 
                    <span key={starsElem.toString()} className="ratings__stars__empty">
                        <FontAwesomeIcon icon={faStar} />
                    </span>)}
        </div>
    )
}

export default Rating