import React from "react";
import '../Banner/Banner.scss';
import imageBanner from '../../assets/imageBanner.png';

function Banner() {
    return (
        <div className="banner">
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            <img className="banner__image" src={imageBanner} alt="falaise en bord de mer"/>
        </div>
    )
}

export default Banner

