import React, { useEffect, useRef, useState } from 'react';
import { useBeerStore, selectFilteredRecipes } from '../../beerStore.js';
import {
  BeerCard,
  BeerImage,
  BeerTitle,
  BeerDescription,
  BeerStats,
  WrapperBeerStats,
} from './BeerRecipesList.styled';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';
import  defaultImageBeer  from "../../images/defaultImageBeer.png";

export const BeerRecipesList = () => {
  const selectedFilters = useBeerStore(state => state.selectedFilters);
  const beerRecipes = useBeerStore(state => state.beerRecipes);
  const selectedRecipes = useBeerStore(state => state.selectedRecipes);

  const fetchBeerRecipes = useBeerStore(state => state.fetchBeerRecipes);

  const addToSelectedRecipes = useBeerStore(
    state => state.addToSelectedRecipes
  );
  const removeSelectedRecipes = useBeerStore(
    state => state.removeSelectedRecipe
  );

  const filteredRecipes = selectFilteredRecipes(
    beerRecipes,
    selectedFilters,
    selectedRecipes
  );
  const [isLoading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);
  const [totalRecipesCount, setTotalRecipesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isShowButton, setShowButton] = useState(false);
  const lastPage = 13;

  const containerRef = useRef();

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchBeerRecipes(page);
      setLoading(false);
    };

    fetchData();
  }, [fetchBeerRecipes, page]);

  useEffect(() => {
    setTotalRecipesCount(filteredRecipes.length);
    setVisibleCount(5);
  }, [filteredRecipes]);

  useEffect(() => {
    if (visibleCount >= totalRecipesCount) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [visibleCount, totalRecipesCount]);

  useEffect(() => {
    if (page === lastPage && visibleCount === totalRecipesCount) {
      setShowButton(false);
    }
  }, [page, totalRecipesCount, visibleCount]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [filteredRecipes]);

  const handleRecipeSelect = (recipe, event) => {
    if (event.button === 2) {
      event.preventDefault();
      const isRecipeSelected = selectedRecipes.some(
        selectedRecipe => selectedRecipe.id === recipe.id
      );
      if (isRecipeSelected) {
        removeSelectedRecipes(recipe);
      } else {
        addToSelectedRecipes(recipe);
      }
    }
  };

  const handleRemoveSelected = recipe => {
    removeSelectedRecipes(recipe);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 200;

      if (scrolledToBottom && visibleCount < totalRecipesCount) {
        const newVisibleCount = Math.min(visibleCount + 5, totalRecipesCount);
        setVisibleCount(newVisibleCount);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleCount, totalRecipesCount]);

  const handleImageError = event => {
    event.target.src = defaultImageBeer;
  };


  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Beer Recipes</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.slice(0, visibleCount).map(recipe => (
          <BeerCard
            key={recipe.id}
            selected={selectedFilters.includes(recipe.status)}
            onContextMenu={event => handleRecipeSelect(recipe, event)}
          >
            <div style={{ width: '50px' }}>
              <BeerImage
                src={recipe.image_url || defaultImageBeer}
                alt={recipe.name}
                style={{ width: '100%', height: 'auto' }}
                onError={handleImageError}
              />
            </div>
            <div>
              <Link to={`/recipes/${recipe.id}`} state={recipe}>
                <BeerTitle>{recipe.name}</BeerTitle>
              </Link>
              <BeerDescription>{recipe.description}</BeerDescription>
              <WrapperBeerStats>
                <BeerStats>Strength: {recipe.abv} %</BeerStats>
                <BeerStats>Bitterness: {recipe.ibu} IBUs</BeerStats>
                <BeerStats>Color: {recipe.ebc} SRM</BeerStats>
                <BeerStats>
                  Lot size: {recipe.volume.value} {recipe.volume.unit}
                </BeerStats>
              </WrapperBeerStats>
            </div>
            {selectedRecipes.some(
              selectedRecipe => selectedRecipe.id === recipe.id
            ) && (
              <button onClick={() => handleRemoveSelected(recipe)}>
                Delete
              </button>
            )}
          </BeerCard>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
      {isShowButton && (
        <ButtonLoadMore isLoading={isLoading} onLoadMore={onLoadMore} />
      )}
    </div>
  );
};
