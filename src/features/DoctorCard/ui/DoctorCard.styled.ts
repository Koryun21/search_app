import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 16px;
`

export const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
    
`

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
`

export const RatingCard = styled.div`
  background-color: ${({theme}) => theme.basicColorWhite};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
    
  width: 52px;
  height: 52px;
  
  position: absolute;
  left: 12px;
  top: 12px;

  font-weight: 500;
  color: ${({theme}) => theme.basicColorBlack};
`

export const Title = styled.p`
    font-size: 8px;
`
export const Rating = styled.p<{$isNew:boolean}>`
    font-size: ${({$isNew})=>$isNew?'16px':'24px'};
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NameAndStatusBlock = styled.div`
  display: flex;
  gap: 4px;

  font-size: 26px;
  font-weight: 500;
  color: ${({theme}) => theme.basicColorBlack};
`

export const StatusCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.primaryColorGreen};
  margin-top: 2px;
`
export const Subject = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  color: ${({theme}) => theme.basicColorBlack60};
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const AdditionalSubject = styled.span`
  opacity: 50%;
`

export const LastActivity = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${({theme}) => theme.basicColorGrayMedium};
`;