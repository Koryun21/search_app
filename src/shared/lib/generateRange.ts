const MIN_AGE = 18;
const MAX_AGE = 99;

const MIN_RATING = 0;
const MAX_RATING = 100;

export const generatedAgeRange = Array.from(
  { length: MAX_AGE - MIN_AGE + 1 },
  (_, index) => ({
    id: index,
    label: (MIN_AGE + index).toString(),
    value: MIN_AGE + index,
  }),
);

export const generatedRatingRange = Array.from(
  { length: MAX_RATING - MIN_RATING + 1 },
  (_, index) => ({
    id: index,
    label: MIN_RATING + index ? (MIN_RATING + index).toString() : "NEW",
    value: MIN_RATING + index,
  }),
);
