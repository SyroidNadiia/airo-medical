import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 120px;

  &:hover {
    background-color: #d7d4f8;
  }
`;
