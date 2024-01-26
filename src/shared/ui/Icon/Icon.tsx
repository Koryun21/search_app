import React from "react";

import * as Icons from "./Icon.vectors";
import { Wrapper } from "./Icon.styled";

interface IconProps {
  name: keyof typeof Icons;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { name, onClick } = props;

  return <Wrapper onClick={onClick}>{Icons[name]}</Wrapper>;
};

export default Icon;
