import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBeerStore } from 'beerStore.js';
import {
  BeerCard,
  BeerImage,
  BeerTitle,
  BeerDescription,
  BeerStats,
} from './BeerRecipesList.styled';

export const BeerRecipesList = () => {
  const beerRecipes = useBeerStore(state => state.beerRecipes);
  const fetchBeerRecipes = useBeerStore(state => state.fetchBeerRecipes);

  useEffect(() => {
    fetchBeerRecipes();
  }, [fetchBeerRecipes]);

  return (
    <div>
      <h2>Beer Recipes</h2>
      {beerRecipes.map(recipe => (
        <BeerCard key={recipe.id}>
          <div style={{ width: '50px' }}>
            <BeerImage
              src={recipe.image_url}
              alt={recipe.name}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <Link to={`/recipes/${recipe.id}`}>
            <BeerTitle>{recipe.name}</BeerTitle>
          </Link>
          <BeerDescription>{recipe.description}</BeerDescription>
          <BeerStats>Kрепість: {recipe.abv} %</BeerStats>
          <BeerStats>Гіркота: {recipe.ibu} IBUs</BeerStats>
          <BeerStats>Цветность: {recipe.ebc} SRM</BeerStats>
          <BeerStats>
            Розмір партії: {recipe.volume.value} {recipe.volume.unit}
          </BeerStats>
        </BeerCard>
      ))}
    </div>
  );
};
