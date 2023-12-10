let cachedData = null;

export  async function fetchData ()  {
  try {
    if (cachedData) {
      // If data is already cached, return it immediately
      return cachedData;
    }

    // Fetch data from the API
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const jsonData = await response.json();
   //console.log(response);
    // Cache the data for future use
    cachedData = jsonData;

    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};


