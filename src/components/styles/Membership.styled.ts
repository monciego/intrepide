import styled from "styled-components";

export const MembershipChoose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 3rem 0;
`;

export const MembershipChooseText = styled.h4`
  font-weight: 500;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.75rem;
  }
`;

export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 3.8rem;
  height: 1.6875rem;
  background: ${({ theme }) => theme.colors.primary};
  display: block;
  border-radius: 6.25rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  ${ToggleInput}:checked + & {
    background: #ff0101;
  }

  ${ToggleInput}:checked + &::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  &:active:after {
    width: 2.8125rem;
  }
`;

export const MembershipCards = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
