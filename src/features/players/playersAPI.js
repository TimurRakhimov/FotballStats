export const fetchPlayers = async () => {
    try {
        const response = await fetch('/api/v4/teams/86', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'c625dda22c0341c6b7ad3874162e1d37',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
};

export const fetchPlayer = async (id) => {
    try {
        const response = await fetch(`/api/persons/${id}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'c625dda22c0341c6b7ad3874162e1d37',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
}
