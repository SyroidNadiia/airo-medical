import styled from 'styled-components';

export const BeerCard = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  gap: 20px;
`;

export const BeerImage = styled.img`
  width: 100%;
  height: auto;
`;

export const BeerTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

export const BeerDescription = styled.p`
  margin-bottom: 10px;
`;

export const BeerStats = styled.p`
  margin-bottom: 5px;
`;

export const WrapperBeerStats = styled.div`
  display: flex;
`;
