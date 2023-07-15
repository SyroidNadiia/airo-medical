import styled from 'styled-components';

export const BeerWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  gap: 40px;
`;

export const BeerTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const BeerDescription = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const BeerImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const BeerSubtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const BeerList = styled.ul`
  padding-left: 20px;
`;

export const BeerItem = styled.ul`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const IngredientsList = styled.div`
  margin-bottom: 16px;
`;

export const FoodPairingList = styled.div`
  margin-bottom: 16px;
`;

export const BrewerTips = styled.p`
  font-size: 16px;
`;
