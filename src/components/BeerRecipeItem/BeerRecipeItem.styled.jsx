import styled from 'styled-components';

export const BeerWrapper = styled.div`
  background-color: ${({ selected }) => (selected ? '#f9f9f9' : 'transparent')};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const BeerTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const BeerDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

export const BeerImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
`;