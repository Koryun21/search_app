import React from 'react';

import { Doctor } from '@src/shared/config';
import noPhotoMan from '@assets/no_photo_man.png';
import noPhotoWoman from '@assets/no_photo_woman.png';
import noPhoto from '@assets/no_photo.png';

import getSubjectPluralText from '../lib/getSubjectPluralText';
import getUserLastActivity from '../lib/getUserLastActivity';

import {
  AdditionalSubject,
  DescriptionWrapper,
  LastActivity,
  NameAndStatusBlock,
  PhotoWrapper,
  Rating,
  RatingCard,
  StatusCircle,
  StyledPhoto,
  Subject,
  Title,
  Wrapper,
} from './DoctorCard.styled';

type ProfilePhotoProps = Doctor;

const DoctorCard: React.FC<ProfilePhotoProps> = (props) => {
  const {
    sex,
    name,
    defaultSubjectName,
    subjectsCount,
    lastActivityTime,
    age,
    rating,
    photoUrl,
    onlineStatus,
  } = props;
  const getPhotoReplacement = () => {
    switch (sex) {
      case 1:
        return noPhotoMan;
      case 2:
        return noPhotoWoman;
      default:
        return noPhoto;
    }
  };
  const isNew = rating === 0;
  const isOnline = !!onlineStatus;

  return (
    <Wrapper>
      <PhotoWrapper>
        <StyledPhoto
          src={photoUrl ?? getPhotoReplacement()}
          alt="Profile Photo"
        />
        <RatingCard>
          <Title>РЕЙТИНГ</Title>
          <Rating $isNew={isNew}>{isNew ? 'NEW' : rating}</Rating>
        </RatingCard>
      </PhotoWrapper>
      <DescriptionWrapper>
        <NameAndStatusBlock>
          {name}, {age}
          {isOnline && <StatusCircle />}
        </NameAndStatusBlock>
        <Subject>
          {defaultSubjectName}
          {!!subjectsCount && (
            <AdditionalSubject>
              {' '}
              {getSubjectPluralText(subjectsCount)}
            </AdditionalSubject>
          )}
        </Subject>
        {!isOnline && (
          <LastActivity>
            {getUserLastActivity(sex, lastActivityTime)}
          </LastActivity>
        )}
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default DoctorCard;
