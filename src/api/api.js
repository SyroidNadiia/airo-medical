
export const fetchBeerRecipes = async page => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching beer recipes:', error);
    throw error;
  }
};