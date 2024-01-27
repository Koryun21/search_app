import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.basicColorGrayMedium};
  border-radius: 2px;
  cursor: pointer;
  padding: 14px 30px 14px 16px;
  width: 100%;
  
  @media screen and ${({theme}) => theme.media.desktop} {
    padding: 8px;
  }
`;

export const SelectedValue = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basicColorBlack};
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  @media screen and ${({theme}) => theme.media.mobileL} {
      font-size: 14px;
  }
`;

export const OptionsList = styled.ul<{ $isOpen: boolean }>`
  width: 100%;
  max-height: 300px;
  overflow: auto;
  outline: 1px solid ${({ theme }) => theme.colors.basicColorGrayMedium};
  background-color: ${({ theme }) => theme.colors.basicColorWhite};
  
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  z-index: 3;
`;

export const OptionItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basicColorBlack};
  &:hover {
    background-color: ${({ theme }) => theme.colors.basicColorGrayMedium};
  }
  @media screen and ${({theme}) => theme.media.mobileL} {
      font-size: 14px;
  }
`;

export const IconWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translate(0, -50%);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: translate(0, -50%) rotate(180deg);
    `}
`;
