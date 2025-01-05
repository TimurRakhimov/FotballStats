import React, {useState, useEffect} from "react";
import { fetchPlayers } from "../features/standings/standingsAPI";

const StandingsPage = () => {

    const [standingsInfo, setStandingsInfo] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await fetchPlayers();
            setStandingsInfo(response)
        }
        getData();
    }, [])
    return (
    <div>
        <h2>Standings</h2>
        <p>{JSON.stringify(standingsInfo)}</p>
    </div>
    );
};

export default StandingsPage;
