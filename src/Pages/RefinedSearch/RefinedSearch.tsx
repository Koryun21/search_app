import React from "react";
import { RefinedSearchWrapper } from "./RefinedSearch.styled";
import FilterForm from "../../widgets/FilterForm";
import DoctorCard from '../../features/DoctorCard/ui';

const mockData = {
  "profSpeciality": 1,
  "isCertified": false,
  "userId": "a32b84d8-e1e4-4b4b-8975-1c4690ea8793",
  "name": "Владимир",
  "rating": 82,
  "onlineStatus": 0,
  "lastActivityTime": "2023-12-26T11:06:38.7233333",
  "photoUrl": "https://freuderstest.blob.core.windows.net/photo/a32b84d8-e1e4-4b4b-8975-1c4690ea8793/2835/photo.jpg",
  "defaultSubjectName": "#отношения_с_родителями",
  "sex": 1,
  "birthDate": "2002-03-04T00:00:00",
  "age": 21,
  "subjectsCount": 5,
  "isFavorite": false,
  "hasVideo": true
}
const RefinedSearch = () => {
  return (
    <RefinedSearchWrapper>
      <FilterForm />
      <DoctorCard {...mockData}/>
    </RefinedSearchWrapper>
  );
};

export default RefinedSearch;