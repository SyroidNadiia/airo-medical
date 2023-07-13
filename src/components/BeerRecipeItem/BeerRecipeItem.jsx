import React from 'react';


export const BeerRecipeItem = ({ recipe }) => {
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
  } = recipe;

  return (
    <div>
      <h2>{name}</h2>
      <p>{tagline}</p>
      <p>First brewed: {first_brewed}</p>
      <p>Description: {description}</p>
      <img src={image_url} alt={name} />
      <p>ABV: {abv}</p>
      <p>IBU: {ibu}</p>
      <p>
        Volume: {volume.value} {volume.unit}
      </p>
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
    </div>
  );
};
