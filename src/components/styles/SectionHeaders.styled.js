import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
    text-align: ${(props) => (props.textDefault ? "left" : "center")};
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.25rem;
  }
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 18px;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  text-align: center;
  margin: 0.95rem auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    font-size: 1rem;
    text-align: ${(props) => (props.textDefault ? "left" : "center")};
    margin: ${(props) => (props.textDefault ? "0.95rem 0" : "0.95rem auto")};
    max-width: ${(props) => (props.textDefault ? "100%" : "70%")};
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    max-width: ${(props) => (props.textDefault ? "100%" : "65%")};
  }
`;
