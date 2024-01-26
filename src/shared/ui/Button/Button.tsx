import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const Button:React.FC<ButtonProps> = (props) => {
  const { label, onClick } = props;
  return  (
    <ButtonStyled onClick={onClick}>
      {label}
    </ButtonStyled>
  )
}

export default Button