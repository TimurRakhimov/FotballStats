const cache = {}; // Simple in-memory cache

export const fetchFixtures = async () => {
    const cacheKey = 'fixtures-86'; // Unique key for the request

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log("Using cached standings data");
        return cache[cacheKey];
    } 

    try {
        const response = await fetch('/api/v4/teams/86/matches?dateFrom=2024-08-18&dateTo=2025-05-25', {
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
        console.log("Fetched fitures data from API");
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching standings:", error);
        throw error;
    }
};
