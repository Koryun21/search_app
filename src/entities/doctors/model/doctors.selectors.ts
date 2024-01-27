import { RootState } from '@src/app/store';

export const specialistsSelector = (state: RootState) => ({ ...state.doctors });
