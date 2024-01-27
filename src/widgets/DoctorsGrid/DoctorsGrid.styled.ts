import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
    
  & > button {
      max-width: min-content;
      align-self: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, auto));
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: space-between;
`

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex: 1;
`;

export const Loader = styled.div`
  border: 16px solid ${({theme}) => theme.basicColorGrayMedium};
  border-top: 16px solid ${({theme}) => theme.basicColorWhite}; // Use primary color from colorPalette
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;


export const EmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: ${({theme}) => theme.basicColorGrayMedium};
`;

export const EmptyParagraph = styled.p`
    font-size: 20px;
    line-height: 160%;
    color: ${({theme}) => theme.basicColorBlack};
    text-align: center;
    max-width: 250px;
`