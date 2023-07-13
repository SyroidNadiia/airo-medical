import React, { useEffect } from 'react';
import { useBeerStore } from 'beerStore.js';
// import { BeerRecipeItem } from '../BeerRecipeItem/BeerRecipeItem';
import {
  BeerCard,
  BeerImage,
  BeerTitle,
  BeerDescription,
  BeerStats,
  WrapperBeerStats,
} from './BeerRecipesList.styled';
import { Link } from 'react-router-dom';

export const BeerRecipesList = () => {
  const beerRecipes = useBeerStore(state => state.beerRecipes);
  const fetchBeerRecipes = useBeerStore(state => state.fetchBeerRecipes);
  const selectedRecipes = useBeerStore(state => state.selectedRecipes);
  // const addSelectedRecipe = useBeerStore(state => state.addSelectedRecipe);
  // const removeSelectedRecipe = useBeerStore(
  //   state => state.removeSelectedRecipe
  // );
  const setSelectedRecipes = useBeerStore(state => state.setSelectedRecipes);

  useEffect(() => {
    fetchBeerRecipes();
  }, [fetchBeerRecipes]);

 const handleRecipeSelect = (recipe, event) => {
   if (event.button === 2) {
     console.log('this is rigth button');
     // Check if right mouse button was clicked
     event.preventDefault(); // Prevent default context menu
     if (selectedRecipes.includes(recipe)) {
       setSelectedRecipes(selectedRecipes.filter(item => item !== recipe));
     } else {
       setSelectedRecipes([...selectedRecipes, recipe]);
     }
   }
 };

  return (
    <div>
      <h2>Beer Recipes</h2>
      {beerRecipes.map(recipe => (
        <BeerCard
          key={recipe.id}
          selected={selectedRecipes.includes(recipe)}
          onContextMenu={event => handleRecipeSelect(recipe, event)}
        >
          <div style={{ width: '50px' }}>
            <BeerImage
              src={recipe.image_url}
              alt={recipe.name}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div>
            <Link to={`/recipes/${recipe.id}`} state={recipe}>
              <BeerTitle>{recipe.name}</BeerTitle>
            </Link>
            <BeerDescription>{recipe.description}</BeerDescription>
            <WrapperBeerStats>
              <BeerStats>Kрепість: {recipe.abv} %</BeerStats>
              <BeerStats>Гіркота: {recipe.ibu} IBUs</BeerStats>
              <BeerStats>Цветность: {recipe.ebc} SRM</BeerStats>
              <BeerStats>
                Розмір партії: {recipe.volume.value} {recipe.volume.unit}
              </BeerStats>
            </WrapperBeerStats>
          </div>
        </BeerCard>
      ))}
    </div>
  );
};
