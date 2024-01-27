import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{$isInLine?:boolean}>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;
  @media screen and ${({theme}) => theme.media.desktop} {
    ${({$isInLine}) => $isInLine && css`
      flex-direction: row;
      align-items: center;
    `
  }
  @media screen and ${({theme}) => theme.media.tablet} {
    flex-direction: column;
    align-items: start;
  }
`;
export const LabelStyled = styled.label`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.basicColorBlack};

  @media screen and ${({theme}) => theme.media.desktop} {
     min-width: 120px;  
  }
  @media screen and ${({theme}) => theme.media.mobileL} {
    font-size: 14px;      
  }
`;
