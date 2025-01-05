export const fetchPlayers = async () => {
     try {
         const response = await fetch('/api/v4/competitions/PD/standings', {
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
         console.error("Error fetching standings:", error);
         throw error;
     }
 };
 