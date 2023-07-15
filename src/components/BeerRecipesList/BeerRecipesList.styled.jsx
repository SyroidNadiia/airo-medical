import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BeerCard = styled.div`
  width: 100%;
  max-height: 120px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const BeerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
`;

export const Title = styled.h2`
  color: #978ce1;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BeerImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
`;
export const WrapperBeerImage = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export const BeerTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BeerDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const BeerStats = styled.p`
  font-size: 12px;
`;

export const WrapperBeerStats = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: auto;
`;



export const DeleteButton = styled.button`
  background-color: #cb5252;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 120px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #a53e3e;
  }
`;

export const NoRecipesMessage = styled.p`
  color: #333;
  font-size: 24px;
  text-align: center;
`;

export const BeerRecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const WrapperDeleteButton = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
