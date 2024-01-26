const MIN_AGE = 18;
const MAX_AGE = 99;

export const generatedAgeRange = Array.from(
  { length: (MAX_AGE - MIN_AGE) + 1 },
  (_, index) => ({
    id: index,
    label: (MIN_AGE + index).toString(),
    value: MIN_AGE + index,
  }),
);
