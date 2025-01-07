const cache = {}; // In-memory cache

export const fetchPlayers = async () => {
    const cacheKey = 'team-86'; // Unique key for this request

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log("Using cached players data");
        return cache[cacheKey];
    }

    try {
        const response = await fetch('/api/v3/teams/86', {
            method: 'GET',
            headers: {
                'X-Auth-Token': process.env.REACT_APP_API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        cache[cacheKey] = jsonResponse; // Store response in cache
        console.log("Fetched players data from API");
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
};

export const fetchPlayer = async (id) => {
    const cacheKey = `player-${id}`; // Unique key for each player

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log(`Using cached data for player ${id}`);
        return cache[cacheKey];
    }

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
        cache[cacheKey] = jsonResponse; // Store response in cache
        console.log(`Fetched data for player ${id} from API`);
        return jsonResponse;
    } catch (error) {
        console.error(`Error fetching data for player ${id}:`, error);
        throw error;
    }
};
