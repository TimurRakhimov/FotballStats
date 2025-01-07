import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Real Madrid Stats</div>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/standings">Standings</Link></li>
                    <li><Link to="/fixtures">Fixtures</Link></li>
                    <li><Link to="/statistics">Top Scorers</Link></li>
                </ul>
            </nav>
            <a href="https://www.realmadrid.com/en-US">
            <button className="cta-button">Official Website</button>
            </a>
        </header>
    );
};

export default Header;
