import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../Header/Header.scss";


function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo__img" src={Logo} alt="Logo de Kasa"/>
            </div>
            <nav className="header__navbar">
                <ul>
                    <li className="header__navbar__link">
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { textDecoration:"underline",
                                 textDecorationThickness: "1.5px",
                                 textUnderlineOffset: "3px"} : {}
                            }}
                            end to={'/'}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__navbar__link">
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { textDecoration:"underline",
                                                    textDecorationThickness: "1.5px",
                                                    textUnderlineOffset: "3px"
                                } : {}
                            }}
                            end to={'/apropos'}>
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
           
        </header>
    )
}

export default Header