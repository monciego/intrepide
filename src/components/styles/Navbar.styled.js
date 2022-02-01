import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";

export const StyledNavbar = styled.nav`
  font-family: ${({ theme }) => theme.fonts.merriweather};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.25rem 0;
`;

export const Logo = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const NavLists = styled.ul`
  display: none;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const NavList = styled.li``;

export const NavLink = styled(Link)`
  font-size: 0.95rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    border-bottom: 1.25px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Menu = styled(BiMenu)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
