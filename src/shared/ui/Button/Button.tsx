import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'button' | 'reset';
}
const Button:React.FC<ButtonProps> = (props) => {
  const { label, onClick, type= 'button' } = props;
  return  (
    <ButtonStyled onClick={onClick} type={type}>
      {label}
    </ButtonStyled>
  )
}

export default Button