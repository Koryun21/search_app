import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.secondaryColorPink};
  border-radius: 2px;
  padding: 16px 68px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.basicColorWhite};
`;
