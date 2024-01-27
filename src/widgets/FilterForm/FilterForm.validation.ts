import * as yup from 'yup';

const messages = {
  age: 'Максимальный возраст должен быть больше',
  rating: 'Максимальная оценка должна быть больше'
};

const selectOptionFragment = yup.object().shape({
  id: (yup.number() || yup.string()).required(),
  label: yup.string().required(),
  value: (yup.number() || yup.string()).required(),
  isDemo: yup.boolean()
});

export const schemaFilterForm = yup.object({
  sex: selectOptionFragment,
  profSpeciality: selectOptionFragment.default(null).nullable(),
  ageFrom: selectOptionFragment,
  ageTo: selectOptionFragment.test("ageTo", messages.age, function (obj) {
    const { value: ageTo } = obj;
    const { value: ageFrom } = this.parent.ageFrom;
    if (ageTo && ageFrom && !isNaN(ageTo) && !isNaN(ageFrom)) {
      return ageTo >= ageFrom;
    }
    return true;
  }),
  ratingFrom: selectOptionFragment,
  ratingTo: selectOptionFragment.test("ratingTo", messages.rating, function (obj) {
    const { value: ratingTo } = obj;
    const { value: ratingFrom } = this.parent.ratingFrom;
    if ((ratingTo || ratingTo===0) && (ratingFrom || ratingFrom === 0) && !isNaN(ratingTo) && !isNaN(ratingFrom)) {
      return ratingTo >= ratingFrom;
    }
    return true;
  }),
  subjectId: selectOptionFragment.default(null).nullable()
});