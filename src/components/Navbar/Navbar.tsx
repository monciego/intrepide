import { useState } from 'react';
import { StyledButton } from '@/components/styles/Button.styled';
import {
  Logo,
  StyledNavbar,
  Menu,
  NavLists,
  NavList,
  NavLink,
} from '@/components/styles/Navbar.styled';
import MobileNav from '@/components/Navbar/MobileNavigation';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggleHandler={toggleHandler} />
      <StyledNavbar>
        <Logo>Intrepide</Logo>
        <Menu onClick={toggleHandler} />
        <NavLists>
          <NavList>
            <NavLink to='/' smooth={true} duration={650} delay={0}>
              Home
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to='programs' smooth={true} duration={650} delay={0}>
              Programs
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to='about' smooth={true} duration={650} delay={0}>
              About Us
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to='memberships' smooth={true} duration={650} delay={0}>
              Memberships
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to='testimonials' smooth={true} duration={650} delay={0}>
              Testimonials
            </NavLink>
          </NavList>
          <StyledButton primary={true}>Become a member</StyledButton>
        </NavLists>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
