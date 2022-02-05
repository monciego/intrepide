import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 2rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    flex-direction: ${(props) => (props.imgStart ? "row" : "row-reverse")};
  }
`;

export const CardImage = styled.figure`
  width: 100%;
  height: 16rem;
  position: relative;
  margin-bottom: 0.85rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 45%;
    height: 18rem;

    &::before {
      content: "";
      position: absolute;
      top: 4.25rem;
      height: 0.0625rem;
      background: #fff;
      width: 5rem;
      left: ${(props) => (props.imgStart ? "90%" : "-3rem")};
      display: ${(props) => (props.line ? "block" : "none")};
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 45%;
  }
`;

export const SubTitle = styled.h4`
  font-size: 0.75rem;
  line-height: 1px;
  position: relative;
  display: inline-block;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.35rem;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    height: 0.35rem;
    z-index: -1;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.85rem;
    line-height: 0;
  }
`;

export const SectionCardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const SectionCardDetails = styled.p`
  margin: 0.5rem 0 0.85rem 0;
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 18px;
  font-size: 0.875rem;
  letter-spacing: 0.5px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    margin: 0.85rem 0 1.4rem 0;
  }
`;

export const SectionLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    height: 0.095rem;
    width: 0;
    transition: 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;
