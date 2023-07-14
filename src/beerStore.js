import { create } from 'zustand';

export const useBeerStore = create(set => ({
  beerRecipes: [],
  selectedFilters: 'all',
  selectedRecipes: [],

  addToSelectedRecipes: recipe =>
    set(state => {
      const isRecipeSelected = state.selectedRecipes.some(
        selectedRecipe => selectedRecipe.id === recipe.id
      );
      if (!isRecipeSelected) {
        return {
          selectedRecipes: [...state.selectedRecipes, recipe],
        };
      }
      return state;
    }),
  
  removeSelectedRecipe: recipe =>
    set(state => ({
      selectedRecipes: state.selectedRecipes.filter(
        item => item.id !== recipe.id
      ),
    })),

  fetchBeerRecipes: async (page) => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
      const data = await response.json();
      set({ beerRecipes: data });
    } catch (error) {
      console.error('Error fetching beer recipes:', error);
    }
  },

  setSelectedFilters: filters => set({ selectedFilters: filters }),
}));

export const selectFilteredRecipes = (
  beerRecipes,
  selectedFilters,
  selectedRecipes
) => {
  switch (selectedFilters) {
    case 'all':
      return beerRecipes;
    case 'selected':
      return beerRecipes.filter(recipe => selectedRecipes.includes(recipe));
    case 'notSelected':
      return beerRecipes.filter(recipe => !selectedRecipes.includes(recipe));
    default:
      return beerRecipes;
  }
};
