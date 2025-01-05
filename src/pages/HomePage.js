import React from "react";
import { fetchPlayers } from "../features/players/playersAPI";

const HomePage = () => {
    const response = fetchPlayers();
    return (
    <div>
    <h2>Home Page</h2>
    </div>
    );
};

export default HomePage;
