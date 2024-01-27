import { RootState } from '../../../app/store';

export const specialistsSelector = (state: RootState) => ({...state.doctors});