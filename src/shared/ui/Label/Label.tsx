import React, { PropsWithChildren } from "react";

import { LabelStyled, Wrapper } from "./Label.styled";
interface LabelProps {
  label: string;
  isInline?: boolean;
}
const Label: React.FC<PropsWithChildren<LabelProps>> = (props) => {
  const { label, isInline, children = false } = props;

  return (
    <Wrapper $isInLine={isInline}>
      <LabelStyled>{label}</LabelStyled>
      {children}
    </Wrapper>
  );
};

export default Label;
