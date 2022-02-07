import styled from "styled-components";
import {
  BsArrowLeft as PrevIcon,
  BsArrowRight as NextIcon,
} from "react-icons/bs";
import { FaQuoteLeft as QuoteIcon } from "react-icons/fa";

export const TestimonialSection = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: 5%;
  }
`;

export const TestimonialDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 45%;
  }
`;

export const TestimonialDetailsCTA = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TestimonialAvatars = styled.div``;

export const AvatarContainer = styled.div`
  display: flex;
  margin: 1rem 0 0.85rem 0;
`;

export const Avatar = styled.img`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  margin-left: -0.5rem;
  border: 2px solid #fff;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const TestimonialReviewCount = styled.p`
  font-size: 0.85rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const TestimonialArrows = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

export const ArrowNext = styled(NextIcon)`
  cursor: pointer;
`;

export const ArrowPrev = styled(PrevIcon)`
  cursor: pointer;
`;

export const TestimonialCardContainer = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const TestimonialCard = styled.div`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.secondaryBG};
  margin: 1.25rem 0;
  height: 100%;
  position: relative;
  border-radius: 3px;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 1rem;
    top: 1rem;
    background: #1c1c1c;
    border-radius: 3px;
    z-index: -1;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
    padding: 1.25rem 2rem;
  }
`;

export const TestimonialQuoteIcon = styled(QuoteIcon)`
  font-size: 1.15rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const TestimonialText = styled.p`
  margin: 1rem 0 1.25rem 0;
  font-size: 0.85rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const AttestantDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AttestantAvatarImage = styled.div`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 100%;
  border: 2px solid #fff;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const AttestantAvatar = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

export const AttestantInformation = styled.div``;

export const AttestantName = styled.p`
  font-size: 0.85rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const AttestantSubName = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 0.8rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`;
