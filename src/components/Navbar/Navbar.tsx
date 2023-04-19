import { useState } from "react";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { StyledButton } from "@/components/styles/Button.styled";
import {
  Logo,
  StyledNavbar,
  Menu,
  NavLists,
  NavList,
  NavLink,
} from "@/components/styles/Navbar.styled";
import MobileNav from "@/components/Navbar/MobileNavigation";
import { sign } from "crypto";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const signInHandler = async () => {
    const res = await signInWithPopup(auth, provider);
    setSignIn(true);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggleHandler={toggleHandler} />
      <StyledNavbar>
        <Logo>Intrepide</Logo>
        <Menu onClick={toggleHandler} />
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

          <div
            className="btn"
            onClick={() => {
              signInHandler();
            }}
          >
            {signIn ? (
              <StyledButton primary={true}>
                Hey, {auth.currentUser?.displayName}
              </StyledButton>
            ) : (
              <StyledButton primary={true}>Become a member</StyledButton>
            )}
          </div>
        </NavLists>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
