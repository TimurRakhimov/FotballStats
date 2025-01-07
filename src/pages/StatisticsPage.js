import React, { useState, useEffect } from "react";
import { fetchStatistics } from "../features/statistics/statisticsAPI";
import "./StatisticsPage.css";

const StatisticsPage = () => {
    const [statisticsInfo, setStatisticsInfo] = useState([]);
    const [selectedLeague, setLeague] = useState("PD"); // Default to La Liga

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchStatistics(selectedLeague); // Pass the selected league
                const table = response.scorers || []; // Correctly map the scorers array
                setStatisticsInfo(table);
            } catch (error) {
                console.error("Error fetching statistics:", error);
            }
        };
        getData();
    }, [selectedLeague]); // Fetch data whenever selectedLeague changes

    if (!statisticsInfo.length)
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Statistics...</p>
            </div>
        );

    return (
        <div className="statistics-page">
            <div className="league-container">
                <h1 className="page-title">Top Scorers</h1>
                <div className="league-tabs">
                    <button
                        className={`tab-button ${selectedLeague === "PD" ? "active" : ""}`}
                        onClick={() => setLeague("PD")}
                    >
                        La Liga
                    </button>
                    <button
                        className={`tab-button ${selectedLeague === "CL" ? "active" : ""}`}
                        onClick={() => setLeague("CL")}
                    >
                        UEFA Champions League
                    </button>
                </div>
            </div>
            <table className="statistics-table">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Player</th>
                        <th>Matches</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>G/A</th>
                        <th>Penalties</th>
                    </tr>
                </thead>
                <tbody>
                    {statisticsInfo.map((player, index) => (
                        <tr
                            key={player.player.id}
                            className={player.team.name === "Real Madrid CF" ? "highlight-row" : ""}
                        >
                            <td>{index + 1}</td>
                            <td className="team-column">
                                <img src={player.team.crest} alt={player.team.name} className="team-logo" />
                            </td>
                            <td>{player.player.name}</td>
                            <td>{player.playedMatches}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists || 0}</td>
                            <td>{player.goals + (player.assists || 0)}</td>
                            <td>{player.penalties || 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatisticsPage;
