const cache = {}; // In-memory cache
const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://api.football-data.org';
const endpoint = '/v3/teams/86';

export const fetchPlayers = async () => {
    const cacheKey = 'team-86'; // Unique key for this request

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log("Using cached players data");
        return cache[cacheKey];
    }

    try {
        const response = await fetch(`${baseURL}${endpoint}`, {
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