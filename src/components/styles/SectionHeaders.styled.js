import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
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
    max-width: 70%;
    font-size: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    max-width: 65%;
  }
`;
