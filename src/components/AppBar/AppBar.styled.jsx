import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  margin-bottom: 16px;
  box-shadow: 0px 8px 15px -5px rgba(34, 60, 80, 0.6);
`;

export const NavContainer = styled.nav`
  padding: 15px;
  width: 1200px;
`;

export const NavLinks= styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  margin-right: 15px;
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: black;

  &.active{
    color: orange;
  };

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: black;
  }
`;