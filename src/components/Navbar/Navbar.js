import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Logo,
  StyledNavbar,
  Menu,
  NavLists,
  NavList,
  NavLink,
} from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>Inrepide</Logo>
      <Menu />
      <NavLists>
        <NavList>
          <NavLink to="/">Home</NavLink>
        </NavList>
        <NavList>
          <NavLink to="programs">Programs</NavLink>
        </NavList>
        <NavList>
          <NavLink to="about">About Us</NavLink>
        </NavList>
        <NavList>
          <NavLink to="memberships">Memberships</NavLink>
        </NavList>
        <NavList>
          <NavLink to="testimonials">Testimonials</NavLink>
        </NavList>
        <StyledButton primary={true}>Become a member</StyledButton>
      </NavLists>
    </StyledNavbar>
  );
};

export default Navbar;
