import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BeerWrapper,
  BeerTitle,
  BeerDescription,
  BeerImage,
  IngredientsList,
  FoodPairingList,
  BrewerTips,
  BeerItem,
  BeerList,
  BeerSubtitle,
} from './BeerRecipeItem.styled';
import { GoBackBtn } from '../GoBackButton/GoBackButton';
import { IoIosArrowRoundBack } from 'react-icons/io';
import defaultImageBeer from '../../images/defaultImageBeer.png';


export const BeerRecipeItem = ({ onSelect }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv,
    ibu,
    volume,
    ingredients,
    food_pairing,
    brewers_tips,
  } = location.state;

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onSelect(name, !selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = name;
  }, [name]);

  const handleImageError = event => {
    event.target.src = defaultImageBeer;
  };

  return (
    <>
      <GoBackBtn to={backLink.current}>
        <IoIosArrowRoundBack /> Go back
      </GoBackBtn>
      <BeerWrapper selected={selected} onClick={handleClick}>
        <BeerImage
          src={image_url || defaultImageBeer}
          alt={name}
          onError={handleImageError}
        />
        <div>
        <BeerTitle>{name}</BeerTitle>
        <BeerDescription>{tagline}</BeerDescription>
        <BeerDescription>First brewed: {first_brewed}</BeerDescription>
        <BeerDescription>Description: {description}</BeerDescription>
        
        <BeerDescription>ABV: {abv}</BeerDescription>
        <BeerDescription>IBU: {ibu}</BeerDescription>
        <BeerDescription>
          Volume: {volume.value} {volume.unit}
        </BeerDescription>
        <IngredientsList>
          <BeerSubtitle>Ingredients</BeerSubtitle>
          <BeerList>
            {ingredients.malt.map(malt => (
              <BeerItem key={malt.name}>
                {malt.name}: {malt.amount.value} {malt.amount.unit}
              </BeerItem>
            ))}
          </BeerList>
        </IngredientsList>
        <FoodPairingList>
          <BeerSubtitle>Food Pairing</BeerSubtitle>
          <BeerList>
            {food_pairing.map(food => (
              <BeerItem key={food}>{food}</BeerItem>
            ))}
          </BeerList>
        </FoodPairingList>
        <BrewerTips>Brewer's Tips: {brewers_tips}</BrewerTips>
        </div>
        
      </BeerWrapper>
    </>
  );
};

