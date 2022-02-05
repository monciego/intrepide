import styled from "styled-components";

export const AboutSection = styled.section``;

export const AboutCards = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 2.25rem;
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
