import React from "react";
import { RefinedSearchWrapper } from "./RefinedSearch.styled";
import FilterForm from "../../widgets/FilterForm";
const RefinedSearch = () => {
  return (
    <RefinedSearchWrapper>
      <FilterForm />
    </RefinedSearchWrapper>
  );
};

export default RefinedSearch;