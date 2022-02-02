import styled from "styled-components";

export const MainHero = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
  }
`;

export const MainDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 5rem;
  }
`;

export const MainTitlte = styled.h1`
  font-size: 2.125rem;
  font-family: ${({ theme }) => theme.fonts.merriweather};
  font-weight: 900;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.8rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.5rem;
  }
`;

export const MainTitleLine = styled.span`
  position: relative;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    bottom: 0.25rem;
    left: 0;
    right: 0;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: -1;

    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 0.4rem;
      bottom: 0.5rem;
    }

    @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      height: 0.25rem;
    }
  }
`;

export const MainTitleTextGradient = styled.span`
  background: -webkit-linear-gradient(#fcfaf9 40%, #fbddb1 70%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MainDescription = styled.p`
  margin: 1rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 18px;
  font-size: 0.875rem;
  letter-spacing: 0.5px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    width: 90%;
  }
`;

export const MainButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: start;
  }
`;

export const MainImage = styled.figure`
  width: 100%;
  height: 16rem;
  background: -webkit-linear-gradient(#181818 0%, rgba(24, 24, 24, 0) 100%);
  z-index: 50;
  position: relative;
  margin-top: 3rem;
  border-radius: 5px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background: transparent;
    height: 28rem;
  }
`;

export const HeroImage = styled.img`
  height: 18rem;
  top: -2rem;
  bottom: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
  }
`;
