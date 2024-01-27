import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondaryColorPink};
  border-radius: 2px;
  padding: 16px 68px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.basicColorWhite};
    
  @media screen and ${({theme}) => theme.media.desktop} {
      display: flex;
      padding: 14px 30px;
      font-size: 14px;
      width: 100%;
  }
`;
