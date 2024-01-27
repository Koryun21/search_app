import React from 'react';
import {
  AdditionalSubject,
  DescriptionWrapper, LastActivity,
  NameAndStatusBlock,
  PhotoWrapper,
  Rating,
  RatingCard, StatusCircle,
  StyledPhoto, Subject,
  Title,
  Wrapper,
} from './DoctorCard.styled';

// @ts-ignore
import  noPhotoMan from '../../../shared/assets/no_photo_man.png';
// @ts-ignore
import  noPhotoWoman from '../../../shared/assets/no_photo_woman.png';
// @ts-ignore
import  noPhoto from '../../../shared/assets/no_photo.png';
import getSubjectPluralText from '../lib/getSubjectPluralText';
import getUserLastActivity from '../lib/getUserLastActivity';
interface ProfilePhotoProps {
  "profSpeciality"?: number,
  "isCertified"?: boolean,
  "userId"?: string,
  "name"?: string,
  "rating"?: number,
  "onlineStatus"?: number,
  "lastActivityTime": string,
  "photoUrl"?: string,
  "defaultSubjectName"?: string,
  "sex": number,
  "birthDate"?: string,
  "age"?: number,
  "subjectsCount"?: number,
  "isFavorite"?: boolean,
  "hasVideo"?: boolean
}

const DoctorCard:React.FC<ProfilePhotoProps> = (props) => {
  const { sex, name , defaultSubjectName,subjectsCount, lastActivityTime, age, rating, photoUrl, onlineStatus } = props;
  const getPhotoReplacement = () => {
    switch (sex){
      case 1:
        return noPhotoMan
      case 2:
        return noPhotoWoman
      default:
        return noPhoto
    }
  }
  const isNew = rating === 0;
  const isOnline = !!onlineStatus

  return (
    <Wrapper>
      <PhotoWrapper>
          <StyledPhoto
            src={photoUrl??getPhotoReplacement()}
            alt="Profile Photo"
          />
          <RatingCard>
            <Title>РЕЙТИНГ</Title>
            <Rating $isNew={isNew}>{isNew?'NEW':rating}</Rating>
          </RatingCard>
      </PhotoWrapper>
      <DescriptionWrapper>
        <NameAndStatusBlock>
          {name}, {age}
          {isOnline && <StatusCircle/>}
        </NameAndStatusBlock>
        <Subject>
          {defaultSubjectName}
          {!!subjectsCount && <AdditionalSubject> {getSubjectPluralText(subjectsCount)}</AdditionalSubject>}
        </Subject>
        {!isOnline && <LastActivity>{getUserLastActivity(sex,lastActivityTime)}</LastActivity>}
      </DescriptionWrapper>
    </Wrapper>
  );
}

export default DoctorCard