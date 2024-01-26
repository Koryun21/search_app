import React from "react";
import { SelectBlock, Wrapper } from "./AgeRange.styled";
import Select from "../../../shared/ui/Select";
import { generatedAgeRange } from '../lib/generateAgeRange';

const AgeRange: React.FC = () => {
  const firstItem = generatedAgeRange[0];
  const lastItem = generatedAgeRange[generatedAgeRange.length - 1]

  return (
    <Wrapper>
      <SelectBlock>
        От
        <Select options={generatedAgeRange} defaultValue={firstItem} />
      </SelectBlock>
      <SelectBlock>
        До
        <Select options={generatedAgeRange} defaultValue={lastItem} />
      </SelectBlock>
    </Wrapper>
  );
};

export default AgeRange;
