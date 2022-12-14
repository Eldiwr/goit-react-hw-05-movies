import styled from 'styled-components';

export const AddTitle = styled.h5`
    padding: 20px;
    margin-bottom: 20px;
    font-size: 22px;
`;
export const CastList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;
export const ReviewList = styled.ul`
 
`;
export const ReviewItem = styled.li`
  margin-bottom: 16px;
  list-style-position: inside; 
  list-style: none;
`