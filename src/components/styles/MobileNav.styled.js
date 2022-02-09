import styled from "styled-components";
import { BiX as CloseIcon } from "react-icons/bi";
import { Link } from "react-scroll";

export const MobileStyledNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: ${({ theme }) => theme.colors.primaryBG};
  position: fixed;
  inset: 0;
  z-index: 900;
  font-family: ${({ theme }) => theme.fonts.merriweather};
  max-width: 90%;
  width: 100%;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.25rem 0 1rem 0;
  border-bottom: 1px solid #fff;
`;

export const MobileLogo = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CloseMenu = styled(CloseIcon)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.35rem;
  margin-top: 2rem;
`;

export const MobileList = styled.li``;

export const MobileLink = styled(Link)`
  cursor: pointer;
  font-size: 1.15rem;
`;

export const MobileBottomText = styled.span`
  position: absolute;
  bottom: 1rem;
  font-size: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.tertiary};
  font-style: italic;
`;

export const MobileMenuImage = styled.figure`
  margin: 1rem 0;
  height: 10.5rem;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.25);
    inset: 0;
  }
`;

export const MobileImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
