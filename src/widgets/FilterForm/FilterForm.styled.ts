import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto,320px));
  grid-column-gap: 10px;
  grid-row-gap: 36px;
  width: 100%;
  justify-content: space-between;

  @media screen and ${({theme}) => theme.media.desktop} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.basicColorGrayMedium};
    border-radius: 2px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  align-self: end;
`

export const RangeSelect = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media screen and ${({theme}) => theme.media.desktop} {
      width: 100%;
  }
`

export const SelectBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 50%;
  max-width: 50%;
  min-width: 150px;
  
  @media screen and ${({theme}) => theme.media.desktop} {
    width: 100%;
    min-width: 280px;
  }

  @media screen and ${({theme}) => theme.media.tablet} {
    min-width: 130px;
  }

  @media screen and ${({theme}) => theme.media.mobileL} {
      font-size: 14px;
  }
`

export const ErrorText = styled.p`
  position: absolute;
  font-size: 12px;
  top: 100%;
  width: 100%;
  color: #c04444;
`