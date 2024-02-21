import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Carrousel/Carrousel.scss";
import Data from "../../assets/logements/logements.json";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

function Slideshow () {
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id);
    
    //Récupération du state local pour la première image
    const [currentIndex, setCurrentIndex] = useState(0);

    function prevImage() {
        setCurrentIndex(currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1)
    };

    function nextImage() {
        setCurrentIndex(currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1)
    };

    if (logement.pictures.length > 1) {
        return (
            <section className="carrousel">
                <div className="carrousel__container">
                    {logement.pictures.map((item, index) => (
                        <img 
                            key={index} 
                            src={item}
                            alt={logement.title}
                            className={currentIndex === index ? "carrousel__container__slide" : "carrousel__container__hiddenSlide"}
                        />   
                    ))}
                    <img
                        src={leftArrow}
                        alt="flèche gauche"
                        className="carrousel__container__leftArrow"
                        onClick={prevImage}
                    />
                    <img
                        src={rightArrow}
                        alt="flèche droite"
                        className="carrousel__container__rightArrow"
                        onClick={nextImage}
                    />
                    <span className="carrousel__container__imgNumber">
                        { currentIndex + 1 }/{ logement.pictures.length }
                    </span>
                </div>
            </section>
        )
    
    } else {
        return (
            <section className="carrousel">
                <div className="carrousel__container">
                    {logement.pictures.map((item, index) => (
                        <img 
                            key={index} 
                            src={item}
                            alt={logement.title}
                            className={currentIndex === index ? "carrousel__container__slide" : "carrousel__container__hiddenSlide"}
                        />   
                    ))}
                </div>
            </section>
        )
    }
    
}


  
export default Slideshow