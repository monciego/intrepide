import styled from "styled-components";

export const BannerContainer = styled.div`
  background: linear-gradient(178.84deg, #181818 0.99%, #111111 81.21%);
  padding: 1rem;
  margin-top: -3rem;
  margin-bottom: 2.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    padding: 1rem 2rem;
  }
`;

export const BannerTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40%;
    font-size: 1.85rem;
  }
`;

export const BannerCTA = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const BannerDetails = styled.p`
  line-height: 18px;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0 1rem 0;
`;
