import React from "react";
import "../Collapse/Collapse.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";


function Collapse({ title, text }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse">
            <div className="collapse__container" onClick={toggle}>
                <div className="collapse__container__title">{title}</div>
                <FontAwesomeIcon className={`collapse__container__icon ${isOpen ? 'rotate' : ''}`} icon={faChevronUp} />
            </div>
            {isOpen && (
                <div className="collapse__container__text">
                    <span>{text}</span>
                </div>
            )}
        </div>
    )

}

export default Collapse