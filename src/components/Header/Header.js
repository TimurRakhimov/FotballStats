import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="custom-header">
            <div className="header-container">
                <div className="header-left">
                    <img src="og-image.png" alt="Team Logo" className="header-team-logo" />
                    <h1 className="header-title">RM Stats</h1>
                </div>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/players" className="nav-link">Players</Link></li>
                        <li className="nav-item"><Link to="/standings" className="nav-link">Standings</Link></li>
                        <li className="nav-item"><Link to="/fixtures" className="nav-link">Fixtures</Link></li>
                        <li className="nav-item"><Link to="/statistics" className="nav-link">Statistics</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
