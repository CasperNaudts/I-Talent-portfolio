import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "../link/Link";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
    
    return(
        <nav className="portfolio-navbar">
            <div className="portfolio-navbar-title">
                <Link to="/">I-Talent Casper Naudts</Link>
            </div>
            <div className="portfolio-navbar-items">
                <NavLink
                    className="portfolio-navbar-items-item"
                    exact
                    to="/"
                    activeStyle={{
                        fontWeight: "bold",
                    }}
                >Studie & Projecten</NavLink>
                <NavLink
                    className="portfolio-navbar-items-item"
                    exact
                    to="/seminaries"
                    activeStyle={{
                        fontWeight: "bold",
                    }}
                >Seminaries</NavLink>
                <NavLink
                    className="portfolio-navbar-items-item"
                    exact
                    to="/internationaal"
                    activeStyle={{
                        fontWeight: "bold",
                    }}
                >Internationaal</NavLink>
            </div>
        </nav>
    );
};