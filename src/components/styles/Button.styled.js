import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.merriweather};
  background: ${(props) => (props.primary ? "#FF0034" : "#0736DB")};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "#CD0031" : "#022398")};
  }
`;
