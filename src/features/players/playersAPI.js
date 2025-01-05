import apiClient from "../../utils/apiClient"

export const fetchPlayers = async () => {
    try {
        const response = await fetch('https://api.football-data.org/v4/persons/16275', 
            {
                method: 'GET',
                headers: {
                    'X-Auth-Token': 'c625dda22c0341c6b7ad3874162e1d37'
                }
            }
        )
        
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
};

