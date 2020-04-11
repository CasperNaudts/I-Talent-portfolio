import React from 'react';
import { Link } from "../link/Link";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
    
    return(
        <nav className="portfolio-navbar">
            <div className="portfolio-navbar-title">
                <Link to="/">I-Talent Casper Naudts</Link>
            </div>
            <div className="portfolio-navbar-items">
                <div className="portfolio-navbar-items-item">
                    <Link to="/">Projecten</Link>
                </div>
                <div className="portfolio-navbar-items-item">
                    <Link to="/seminaries">Seminaries</Link>
                </div>
                <div className="portfolio-navbar-items-item">
                    <Link to="/internationaal">Internationaal</Link>
                </div>
            </div>
        </nav>
    );
};