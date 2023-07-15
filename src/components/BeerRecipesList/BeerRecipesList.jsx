import React, { useEffect, useRef, useState } from 'react';
import { useBeerStore, selectFilteredRecipes } from '../../store/beerStore.js';
import {
  BeerCard,
  BeerImage,
  BeerTitle,
  BeerDescription,
  BeerStats,
  WrapperBeerStats,
  Title,
  DeleteButton,
  NoRecipesMessage,
  BeerRecipesContainer,
  BeerContent,
  WrapperBeerImage,
  WrapperDeleteButton,
  WrapperInner,
  StyledLink,
} from './BeerRecipesList.styled';

import { Loader } from '../Loader/Loader.jsx';
import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';
import defaultImageBeer from '../../images/defaultImageBeer.png';

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
  const [visibleCount, setVisibleCount] = useState(15);
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
    setVisibleCount(15);
  }, [filteredRecipes]);

  useEffect(() => {
    console.log('selectedRecipes.length', selectedRecipes.length);
    console.log('filteredRecipes.length', filteredRecipes.length);
    if (
      totalRecipesCount > visibleCount ||
      filteredRecipes.length === 0 ||
      selectedRecipes.length === filteredRecipes.length
    ) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [
    visibleCount,
    totalRecipesCount,
    filteredRecipes.length,
    selectedRecipes.length,
  ]);

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

  const handleRemoveFiltered = recipe => {
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
    <BeerRecipesContainer>
      {filteredRecipes.length > 0 && (
        <>
          <Title>Beer Recipes</Title>

          {filteredRecipes.slice(0, visibleCount).map(recipe => (
            <BeerCard
              key={recipe.id}
              selected={selectedFilters.includes(recipe.status)}
              onContextMenu={event => handleRecipeSelect(recipe, event)}
            >
              <WrapperBeerImage style={{ width: '200px', height: '120px' }}>
                <BeerImage
                  width={200}
                  height={120}
                  src={recipe.image_url || defaultImageBeer}
                  alt={recipe.name}
                  onError={handleImageError}
                />
              </WrapperBeerImage>
              <WrapperInner>
                <BeerContent>
                  <StyledLink to={`/recipes/${recipe.id}`} state={recipe}>
                    <BeerTitle>{recipe.name}</BeerTitle>
                  </StyledLink>
                  <BeerDescription>{recipe.description}</BeerDescription>
                  <WrapperBeerStats>
                    <BeerStats>
                      <strong>Strength: </strong>
                      {recipe.abv} %
                    </BeerStats>
                    <BeerStats>
                      <strong>Bitterness:</strong> {recipe.ibu} IBUs
                    </BeerStats>
                    <BeerStats>
                      <strong>Color:</strong> {recipe.ebc} SRM
                    </BeerStats>
                    <BeerStats>
                      <strong>Lot size: </strong> {recipe.volume.value}{' '}
                      {recipe.volume.unit}
                    </BeerStats>
                  </WrapperBeerStats>
                </BeerContent>
                <WrapperDeleteButton
                  style={{ width: '120px', height: '120px' }}
                >
                  {selectedRecipes.some(
                    selectedRecipe => selectedRecipe.id === recipe.id
                  ) && (
                    <DeleteButton onClick={() => handleRemoveFiltered(recipe)}>
                      Delete
                    </DeleteButton>
                  )}
                </WrapperDeleteButton>
              </WrapperInner>
            </BeerCard>
          ))}
        </>
      )}
      {filteredRecipes.length === 0 && (
        <NoRecipesMessage>No recipes found.</NoRecipesMessage>
      )}
      {isShowButton && (
        <ButtonLoadMore isLoading={isLoading} onLoadMore={onLoadMore} />
      )}
    </BeerRecipesContainer>
  );
};
