import React from 'react';
import { Link } from "../link/Link";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
    
    return(
        <nav className="portfolio-navbar">
            <div className="portfolio-navbar-item">
                <Link to="/">Home</Link>
            </div>
            <div className="portfolio-navbar-item">
                <Link to="/seminaries">Semineries</Link>
            </div>
            <div className="portfolio-navbar-item">
                <Link to="/student-zelfstandige">Student zelfstandige</Link>
            </div>
        </nav>
    );
};