import React from "react";
import '../Banner/Banner.scss';
import imageBanner from '../../assets/imageBanner.png';
import aboutImageBanner from '../../assets/aboutImageBanner.png'

function Banner({page, content}) {
    const imgsrc = page === "/" ? imageBanner : aboutImageBanner;
    const imgClassName = page === "/" ? "banner__image" : "banner__image__about";
    const imgAlt = page === "/" ? "Falaises en bord de mer" : "Montagnes enneigées et fleuve";
    return (
        <div className="banner">
            <img className={`banner__image ${imgClassName}`} src={imgsrc} alt={imgAlt}/>
            <div className="banner__content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Banner

