import React from "react";
import { Divider, RefinedSearchWrapper } from './RefinedSearch.styled';
import FilterForm from "../../widgets/FilterForm";
import DoctorsGrid from '../../widgets/DoctorsGrid';

const RefinedSearch = () => {
  return (
    <RefinedSearchWrapper>
      <FilterForm />
      <Divider/>
      <DoctorsGrid/>
    </RefinedSearchWrapper>
  );
};

export default RefinedSearch;