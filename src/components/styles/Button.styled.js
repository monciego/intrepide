import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.merriweather};
  background: ${(props) => (props.primary ? "#FF0034" : "#0736DB")};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;

  &:hover {
    background: ${(props) => (props.primary ? "#CD0031" : "#022398")};
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.95rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.8rem;
    padding: 0.5rem 1.25rem;
  }
`;
