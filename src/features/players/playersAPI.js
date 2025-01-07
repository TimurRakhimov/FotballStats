const cache = {}; // In-memory cache
const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://api.football-data.org';
const endpoint = '/v3/teams/86';

export const fetchPlayers = async () => {
    const cacheKey = 'team-86'; // Unique key for this request

    if (cache[cacheKey]) {
        console.log("Using cached players data");
        return cache[cacheKey];
    }

    try {
        const url = `${baseURL}${endpoint}`; // Use full URL
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': process.env.REACT_APP_API_KEY, // Pass API key in headers
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        cache[cacheKey] = jsonResponse; // Store response in cache
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
};