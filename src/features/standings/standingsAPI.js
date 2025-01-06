const cache = {}; // Simple in-memory cache

export const fetchStandings = async (leagueCode) => {
    const cacheKey = `standings-${leagueCode}`; // Unique key for the request

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log(`Using cached standings data for ${leagueCode}`);
        return cache[cacheKey];
    }

    try {
        const response = await fetch(`/api/v4/competitions/${leagueCode}/standings`, {
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
        console.log(`Fetched standings data for ${leagueCode} from API`);
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching standings:", error);
        throw error;
    }
};
