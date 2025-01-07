const cache = {}; // Simple in-memory cache

export const fetchFixtures = async () => {
    const cacheKey = 'fixtures-86'; // Unique key for the request

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log("Using cached standings data");
        return cache[cacheKey];
    } 

    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.football-data.org/v3/teams/86/matches?dateFrom=2024-08-18&dateTo=2025-05-25', {
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
        console.log("Fetched fitures data from API");
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching standings:", error);
        throw error;
    }
};
