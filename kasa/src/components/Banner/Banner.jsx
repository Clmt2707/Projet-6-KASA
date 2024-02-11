import React from "react";
import '../Banner/Banner.scss';
import imageBanner from '../../assets/imageBanner.png';
import aboutImageBanner from '../../assets/aboutImageBanner.png'

function Banner({page, content}) {
    const imgsrc = page === "/" ? imageBanner : aboutImageBanner;
    const imgClassName = page === "/" ? "banner__image" : "banner__image__about";

    return (
        <div className="banner">
            <img className={`banner__image ${imgClassName}`} src={imgsrc} alt="Paysage mer et montagne"/>
            <div className="banner__content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Banner

