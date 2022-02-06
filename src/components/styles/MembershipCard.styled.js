import styled from "styled-components";
import { HiCheckCircle as IconCheck } from "react-icons/hi";

export const MembershipStyledCard = styled.div`
  border: 0.125rem solid ${({ theme }) => theme.colors.primary};
  padding: 2rem 1.85rem;
  border-radius: 0.625rem;
  margin: 2rem 0;
  position: relative;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 22rem;
  }
`;

export const MembershipTier = styled.h4`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 0.85rem;
`;

export const MembershipPrice = styled.h3`
  font-size: 2.5rem;
  margin-top: 0.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.015rem solid ${({ theme }) => theme.colors.tertiary};
`;

export const MembershipCardPer = styled.span`
  font-size: 1rem;
  color: #a3a7b0;
  font-weight: 500;
`;

export const MembershipIncludesTitle = styled.h5`
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  padding-top: 1rem;
`;

export const MembershipIncluded = styled(IconCheck)`
  font-size: 0.975rem;
  fill: ${({ theme }) => theme.colors.primary};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const MembershipNotIncluded = styled(IconCheck)`
  font-size: 0.975rem;
  fill: ${({ theme }) => theme.colors.tertiary};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const MembershipListContainer = styled.ul`
  list-style: none;
  margin: 1rem 0 1.5rem 0;
`;

export const MembershipList = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  font-size: 0.875rem;
  margin: 0.85rem 0;
  color: ${({ theme }) => theme.colors.tertiary};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const MembershipCardCTA = styled.button`
  background: ${(props) => (props.primier ? "#FF0034" : "transparent")};
  color: white;
  padding: 0.75rem 0;
  border: 0.015rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.3125rem;
  width: 100%;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.095rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const PopularPricing = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  text-transform: uppercase;
  border-radius: 0.2125rem;
  font-size: 0.9rem;
  font-weight: 500;
  transform: translateX(-50%);
`;
