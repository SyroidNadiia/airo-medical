import { create } from 'zustand';
import { fetchBeerRecipes } from '../api/api';

const loadSelectedRecipes = () => {
  const selectedRecipes = localStorage.getItem('selectedRecipes');
  return selectedRecipes ? JSON.parse(selectedRecipes) : [];
};

export const useBeerStore = create(set => ({
  
  beerRecipes: [],
  selectedFilters: 'all',
  selectedRecipes: loadSelectedRecipes(),


  addToSelectedRecipes: recipe =>
    set(state => {
      const isRecipeSelected = state.selectedRecipes.some(
        selectedRecipe => selectedRecipe.id === recipe.id
      );
      if (!isRecipeSelected) {
        const updatedSelectedRecipes = [...state.selectedRecipes, recipe];
        localStorage.setItem(
          'selectedRecipes',
          JSON.stringify(updatedSelectedRecipes)
        );
        return { selectedRecipes: updatedSelectedRecipes };
      }
      return state;
    }),

  removeSelectedRecipe: recipe =>
    set(state => {
      const updatedSelectedRecipes = state.selectedRecipes.filter(
        item => item.id !== recipe.id
      );
      localStorage.setItem(
        'selectedRecipes',
        JSON.stringify(updatedSelectedRecipes)
      );
      return { selectedRecipes: updatedSelectedRecipes };
    }),

  fetchBeerRecipes: async page => {
    try {
      const data = await fetchBeerRecipes(page);
      set({ beerRecipes: data });
    } catch (error) {
      console.error('Error fetching beer recipes:', error);
    }
  },

  removeFilteredRecipe: recipe =>
    set(state => ({
      filteredRecipes: state.filteredRecipes.filter(
        item => item.id !== recipe.id
      ),
    })),

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
      return beerRecipes.filter(recipe =>
        selectedRecipes.some(selectedRecipe => selectedRecipe.id === recipe.id)
      );
    case 'notSelected':
       return beerRecipes.filter(
         recipe =>
           !selectedRecipes.some(
             selectedRecipe => selectedRecipe.id === recipe.id
           )
       );
    default:
      return beerRecipes;
  }
};
