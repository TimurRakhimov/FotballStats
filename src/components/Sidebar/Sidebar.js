import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [isLeaguesOpen, setIsLeaguesOpen] = useState(true);

    const toggleLeagues = () => {
        setIsLeaguesOpen(!isLeaguesOpen);
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">Quick Stats</div>
            <div className="sidebar-section">
                <h3>Total Stats</h3>
                <ul>
                    <li>Teams: 123</li>
                    <li>Players: 456</li>
                    <li>Fixtures: 789</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 onClick={toggleLeagues} className="collapsible-header">
                    {isLeaguesOpen ? "▼" : "▶"} Leagues
                </h3>
                {isLeaguesOpen && (
                    <ul>
                        <li><a href="/league/1">Premier League</a></li>
                        <li><a href="/league/2">La Liga</a></li>
                        <li><a href="/league/3">Serie A</a></li>
                        <li><a href="/league/4">Bundesliga</a></li>
                        <li><a href="/league/5">Ligue 1</a></li>
                    </ul>
                )}
            </div>
            <div className="sidebar-section">
                <h3>Shortcuts</h3>
                <ul>
                    <li><a href="/top-scorers">Top Scorers</a></li>
                    <li><a href="/live-scores">Live Scores</a></li>
                    <li><a href="/upcoming-fixtures">Upcoming Fixtures</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
