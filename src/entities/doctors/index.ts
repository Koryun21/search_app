import {
  specialistsSelector,
  getMoreSpecialists,
  getSpecialists,
} from './model';

export { default as doctorsReducer } from './model';

export default {
  action: {},
  thunks: {
    getSpecialists,
    getMoreSpecialists,
  },
  selectors: {
    specialistsSelector,
  },
};
