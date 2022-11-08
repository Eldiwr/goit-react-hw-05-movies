import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendMoviesList = styled.li`
  
  list-style-position: inside;
`;

export const MovieItem = styled.li`
  padding-bottom: 8px;
  &::marker {
    color: #2a363b;
    font-size: 30px;
    font-weight: 500;
  }
  &:hover {
    color: orange;
  }
`;

export const LinkStyle = styled(Link)`
  color: #2a363b;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  &:hover,
  &:focus {
    color: orange;
  }
`;

export const TrandTitle = styled.h1`
    margin-left: 32px;
`