import { getMoreSpecialists, getSpecialists } from './model/doctors.thunk';
import { specialistsSelector } from './model/doctors.selectors';

export { default as doctorsReducer } from './model';

export default {
  action: {
  },
  thunks: {
    getSpecialists,
    getMoreSpecialists
  },
  selectors: {
    specialistsSelector
  },
};
