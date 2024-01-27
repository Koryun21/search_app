import { Doctor } from '../../../shared/config/types';

export interface InitialState {
  specialists:Doctor[],
  isLoading:boolean
}

export interface GetSpecialistsReturnType {
  items:Doctor[]
  totalCount:number
}