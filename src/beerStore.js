import create from 'zustand';

export const useBeerStore = create(set => ({
  beerRecipes: [],

  fetchBeerRecipes: async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers?page=1');
      const data = await response.json();
      set({ beerRecipes: data });
    } catch (error) {
      console.error('Error fetching beer recipes:', error);
    }
  },
}));

