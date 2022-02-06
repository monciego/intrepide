import styled from "styled-components";
import { HiCheckCircle as IconCheck } from "react-icons/hi";

export const SectionBenefits = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 5%;
  }
`;

export const BenefitsDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const BenefitsImageContainer = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 45%;
  }
`;

export const BenefitsImage = styled.figure`
  width: 17rem;
  height: 17rem;
  background: rgba(255, 0, 52, 0.25);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(240, 0, 49, 0.97) 0%,
    rgba(255, 0, 52, 0) 100%
  );
  z-index: 50;
  position: relative;
  margin: 3rem auto;
  border-radius: 50%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 28rem;
    width: 28rem;
  }
`;

export const BenefitsImg = styled.img`
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

export const BenefitsLists = styled.ul`
  margin-top: 1rem;
`;

export const BenefitsList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Benefit = styled.li`
  font-size: 0.875rem;
  margin: 0.85rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const CheckIcon = styled(IconCheck)`
  font-size: 0.875rem;
  fill: ${({ theme }) => theme.colors.primary};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;
