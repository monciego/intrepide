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
          <NavLink
            to="/"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
          >
            Home
          </NavLink>
        </NavList>
        <NavList>
          <NavLink
            to="programs"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
          >
            Programs
          </NavLink>
        </NavList>
        <NavList>
          <NavLink
            to="about"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
          >
            About Us
          </NavLink>
        </NavList>
        <NavList>
          <NavLink
            to="memberships"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
          >
            Memberships
          </NavLink>
        </NavList>
        <NavList>
          <NavLink
            to="testimonials"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
          >
            Testimonials
          </NavLink>
        </NavList>
        <StyledButton primary={true}>Become a member</StyledButton>
      </NavLists>
    </StyledNavbar>
  );
};

export default Navbar;
