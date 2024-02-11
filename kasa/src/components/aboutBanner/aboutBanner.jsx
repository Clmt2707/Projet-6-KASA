import React from "react";
import '../aboutBanner/aboutBanner.scss';
import aboutImageBanner from '../../assets/aboutImageBanner.png'

function AboutBanner() {
    return (
        <div className="aboutBanner">
            <img className="aboutBanner__image" src={aboutImageBanner} alt="Montagne et rivière"/>
        </div>
    )
}

export default AboutBanner