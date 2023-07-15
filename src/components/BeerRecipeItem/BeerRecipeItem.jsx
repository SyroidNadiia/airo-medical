import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BeerWrapper,
  BeerTitle,
  BeerDescription,
  BeerImage,
} from './BeerRecipeItem.styled';
import { GoBackBtn } from '../GoBackButton/GoBackButton';
import { IoIosArrowRoundBack } from 'react-icons/io';

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
  }, []);

  return (
    <>
      <GoBackBtn to={backLink.current}>
        <IoIosArrowRoundBack /> Go back
      </GoBackBtn>
      <BeerWrapper selected={selected} onClick={handleClick}>
        <BeerTitle>{name}</BeerTitle>
        <BeerDescription>{tagline}</BeerDescription>
        <BeerDescription>First brewed: {first_brewed}</BeerDescription>
        <BeerDescription>Description: {description}</BeerDescription>
        <BeerImage src={image_url} alt={name} />
        <BeerDescription>ABV: {abv}</BeerDescription>
        <BeerDescription>IBU: {ibu}</BeerDescription>
        <BeerDescription>
          Volume: {volume.value} {volume.unit}
        </BeerDescription>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.malt.map(malt => (
            <li key={malt.name}>
              {malt.name}: {malt.amount.value} {malt.amount.unit}
            </li>
          ))}
        </ul>
        <h3>Food Pairing</h3>
        <ul>
          {food_pairing.map(food => (
            <li key={food}>{food}</li>
          ))}
        </ul>
        <p>Brewer's Tips: {brewers_tips}</p>
      </BeerWrapper>
    </>
  );
};
