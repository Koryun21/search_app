import { Doctor } from '@src/shared/config';

export interface InitialState {
  specialists:Doctor[],
  isLoading:boolean
}

export interface GetSpecialistsReturnType {
  items:Doctor[]
  totalCount:number
}