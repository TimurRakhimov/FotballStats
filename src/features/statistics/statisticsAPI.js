const cache = {}; // Simple in-memory cache

export const fetchStatistics = async (leagueCode) => {
    const cacheKey = `statistics-${leagueCode}`; // Unique key for the request

    // Check if data exists in cache
    if (cache[cacheKey]) {
        console.log(`Using cached statistics data for ${leagueCode}`);
        return cache[cacheKey];
    }

    try {
        const response = await fetch(`/api/v4/competitions/${leagueCode}/scorers`, {
            method: "GET",
            headers: {
                "X-Auth-Token": process.env.REACT_APP_API_KEY, // Ensure the API key is properly set
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        cache[cacheKey] = jsonResponse; // Store response in cache
        console.log(`Fetched statistics data for ${leagueCode} from API`);
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching statistics:", error);
        throw error;
    }
};
