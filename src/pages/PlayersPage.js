import React, {useState, useEffect} from "react";
import { fetchPlayers} from "../features/players/playersAPI";
import PlayerList from "../components/PlayerList/PlayerList";

const PLayersPage = () => {

    const [squad, setSquad] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetchPlayers();
            setSquad(response.squad)
        }
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
    <div>
        <PlayerList squad={squad} />
    </div>
    );
};

export default PLayersPage;
