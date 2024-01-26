import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.basicColorGrayMedium};
  border-radius: 2px;
  cursor: pointer;
  padding: 12px 16px;
`;

export const SelectedValue = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.basicColorBlack};
`;

export const OptionsList = styled.ul<{ $isOpen: boolean }>`
  border: 1px solid ${({ theme }) => theme.basicColorGrayMedium};
  background-color: ${({ theme }) => theme.basicColorWhite};
  width: 100%;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
`;

export const OptionItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.basicColorBlack};
  &:hover {
    background-color: ${({ theme }) => theme.basicColorGrayMedium};
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
