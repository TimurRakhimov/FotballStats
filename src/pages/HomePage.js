import React, {useState, useEffect} from "react";
import { fetchPlayers } from "../features/players/playersAPI";

const HomePage = () => {

    const [clubInfo, setClubInfo] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await fetchPlayers();
            setClubInfo(response)
        }
        getData();
    }, [])
    return (
    <div>
        <h2>Home Page</h2>
        <p>{JSON.stringify(clubInfo)}</p>
    </div>
    );
};

export default HomePage;
