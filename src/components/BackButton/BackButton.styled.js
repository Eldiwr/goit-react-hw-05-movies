import styled from 'styled-components';

export const GoBackButton = styled.button`
  display: inline-block;
  width: 150px;
  height: 48px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border: 0;
  
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &:hover {
    color: orange;
  }
`;

