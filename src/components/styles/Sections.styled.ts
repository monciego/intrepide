import styled from "styled-components";

export const Section = styled.section``;

export const SectionCards = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 2.25rem;
  }
`;
