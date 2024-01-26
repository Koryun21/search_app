import React, { PropsWithChildren } from "react";

import { LabelStyled, Wrapper } from "./Label.styled";
interface LabelProps {
  label: string;
}
const Label: React.FC<PropsWithChildren<LabelProps>> = (props) => {
  const { label, children = false } = props;

  return (
    <Wrapper>
      <LabelStyled>{label}</LabelStyled>
      {children}
    </Wrapper>
  );
};

export default Label;
