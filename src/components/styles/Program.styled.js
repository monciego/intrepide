import styled from "styled-components";

export const ProgramSection = styled.section``;

export const ProgramCards = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 2.25rem;
  }
`;

export const StyledProgramCard = styled.div`
  margin: 2rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    flex-direction: ${(props) => (props.imgStart ? "row" : "row-reverse")};
  }
`;

export const ProgramImage = styled.figure`
  width: 100%;
  height: 16rem;
  position: relative;

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
    }
  }
`;

export const ProgramImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProgramCardDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 45%;
  }
`;

export const ProgramTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  margin-top: 0.85rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const ProgramDetails = styled.p`
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
