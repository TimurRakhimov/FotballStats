import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Football Stats</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/teams">Teams</Link></li>
                    <li><Link to="/fixtures">Fixtures</Link></li>
                    <li><Link to="/cups">Cups</Link></li>
                    <li><Link to="/nationalTeams">National Teams</Link></li>
                    <li><Link to="/coaches">Coaches</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
