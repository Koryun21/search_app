import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { doctorsModel } from '@entities';
import { useAppDispatch, useAppSelector } from '@hooks';
import { DoctorCard } from '@features';
import { Button, Icon } from '@src/shared/ui';

import {
  EmptyParagraph,
  EmptyWrapper,
  Grid,
  Loader,
  LoaderWrapper,
  Wrapper,
} from './DoctorsGrid.styled';

const LIMIT_PER_REQUEST = 12;

const DoctorsGrid: React.FC = () => {
  const { isLoading, specialists } = useAppSelector(
    doctorsModel.selectors.specialistsSelector,
  );
  const [offset, setOffset] = useState(0);
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const isEmpty = specialists.length === 0;
  const handleShowMore = () => {
    const queryParams: Record<string, string> = Object.fromEntries(
      Array.from(searchParams),
    );
    dispatch(
      doctorsModel.thunks.getMoreSpecialists({
        limit: LIMIT_PER_REQUEST.toString(),
        offset: (offset + LIMIT_PER_REQUEST).toString(),
        ...queryParams,
      }),
    );
    setOffset((prev) => prev + LIMIT_PER_REQUEST);
  };

  useEffect(() => {
    const queryParams: Record<string, string> = Object.fromEntries(
      Array.from(searchParams),
    );
    dispatch(
      doctorsModel.thunks.getSpecialists({
        limit: LIMIT_PER_REQUEST.toString(),
        ...queryParams,
      }),
    );
  }, [searchParams, dispatch]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (isEmpty) {
    return (
      <EmptyWrapper>
        <Icon name="emptySearch" />
        <EmptyParagraph>
          К сожалению, нет анкет с такими параметрами{' '}
        </EmptyParagraph>
      </EmptyWrapper>
    );
  }

  return (
    <Wrapper>
      <Grid>
        {specialists.map((specialist) => {
          return <DoctorCard key={specialist.userId} {...specialist} />;
        })}
      </Grid>
      <Button label="Показать еще" onClick={handleShowMore} />
    </Wrapper>
  );
};

export default DoctorsGrid;
