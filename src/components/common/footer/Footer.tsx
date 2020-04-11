import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "../link/Link";
import "./Footer.scss";

export const Footer: React.FC = () => {
    return (
        <div className="portfolio-footer">
            <Link to="https://www.linkedin.com/in/casper-naudts-25a747148/" newTab={true}>
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </Link>
        </div>
    );
}