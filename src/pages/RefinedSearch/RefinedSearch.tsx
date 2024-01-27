import React from 'react';

import FilterForm from '@widgets/FilterForm';
import DoctorsGrid from '@widgets/DoctorsGrid';

import { Divider, RefinedSearchWrapper } from './RefinedSearch.styled';

const RefinedSearch = () => {
  return (
    <RefinedSearchWrapper>
      <FilterForm />
      <Divider />
      <DoctorsGrid />
    </RefinedSearchWrapper>
  );
};

export default RefinedSearch;
