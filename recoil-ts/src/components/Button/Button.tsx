import React from 'react';
import { StyledButton } from './styles';

interface Props {
  text: string;
  children?: JSX.Element;
  color?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ text, children, color, type, onClick }: Props) => {
  return (
    <StyledButton type={type || "submit"} color={color} onClick={onClick}>
      {text || children}
    </StyledButton>
  )
}

export default Button;
