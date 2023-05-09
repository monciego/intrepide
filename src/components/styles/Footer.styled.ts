import styled from "styled-components";

export const FooterSection = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: flex-start;
    gap: 5%;
    margin-top: 1.5rem;
  }
`;

export const FooterCompanyDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 48%;
  }
`;

export const FooterLogo = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.merriweather};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 18px;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  margin: 0.85rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    font-size: 0.9rem;
    margin: 0.95rem 0;
    border-bottom: 0.028125rem solid ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;

export const FooterSections = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
  }
`;

export const FooterSectionLink = styled.div`
  margin-bottom: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;

export const FooterSectionsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.95rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
  }
`;

export const FooterList = styled.li`
  margin-bottom: 0.35rem;
`;

export const FooterLink = styled.a`
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.tertiary};

  position: relative;

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

  &:hover {
    color: #f5f5f5;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`;

export const FooterLine = styled.hr`
  outline: none;
  border: 0.028125rem solid ${({ theme }) => theme.colors.tertiary};
  margin: 0.75rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 18px;
  font-size: 0.875rem;
  letter-spacing: 0.5px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`;

export const LegalLinks = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

export const LegalLink = styled.span`
  font-size: 0.75rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.65rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.8rem;
  }
`;
