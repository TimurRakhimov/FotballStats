import React, { useState, useEffect } from "react";
import { fetchPlayers } from "../features/standings/standingsAPI";
import "./StandingsPage.css"; // Import the CSS file for styling

const StandingsPage = () => {
    const [standingsInfo, setStandingsInfo] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchPlayers();
                const table = response.standings[0]?.table || [];
                setStandingsInfo(table);
            } catch (error) {
                console.error("Error fetching standings:", error);
            }
        };
        getData();
    }, []);

    if (!standingsInfo.length)
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Standings...</p>
            </div>
        );    

    return (
        <div className="standings-page">
            <table className="standings-table">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Points</th>
                        <th>Pl</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                    </tr>
                </thead>
                <tbody>
                    {standingsInfo.map((team) => (
                        <tr key={team.team.id}>
                            <td>{team.position}</td>
                            <td className="team-column">
                                <img src={team.team.crest} alt={team.team.name} className="team-logo" />
                                {team.team.name}
                            </td>
                            <td>{team.points}</td>
                            <td>{team.playedGames}</td>
                            <td>{team.won}</td>
                            <td>{team.draw}</td>
                            <td>{team.lost}</td>
                            <td>{team.goalsFor}</td>
                            <td>{team.goalsAgainst}</td>
                            <td>{team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StandingsPage;
