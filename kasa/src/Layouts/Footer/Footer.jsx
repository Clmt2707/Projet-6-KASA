import React from "react";
import "../Footer/Footer.scss";
import "../../styles/variables.scss";
import logoFooter from "../../assets/logoFooter.png"
function Footer () {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="logo Kasa" className="footer__logo"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer