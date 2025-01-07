import React, { useState, useEffect } from "react";
import { fetchPlayers } from "../features/players/playersAPI";
import PlayerList from "../components/PlayerList/PlayerList";
import "./PlayersPage.css"; // Add CSS file for styling

const PlayersPage = () => {
    const [squad, setSquad] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchPlayers();
                setSquad(response.squad || []);
            } catch (error) {
                console.error("Error fetching players:", error);
            }
        };
        getData();
    }, []);

    if (!squad.length)
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Players...</p>
            </div>
        );

    return (
        <div className="players-page">
            <div className="players-container">
                <h1 className="page-title">Players</h1>
            </div>
            <PlayerList squad={squad} />
        </div>
    );
};

export default PlayersPage;
