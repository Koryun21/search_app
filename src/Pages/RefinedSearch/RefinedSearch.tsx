import React from "react";
import { Devider, RefinedSearchWrapper } from './RefinedSearch.styled';
import FilterForm from "../../widgets/FilterForm";
import DoctorsGrid from '../../widgets/DoctorsGrid';

const RefinedSearch = () => {
  return (
    <RefinedSearchWrapper>
      <FilterForm />
      <Devider/>
      <DoctorsGrid/>
    </RefinedSearchWrapper>
  );
};

export default RefinedSearch;