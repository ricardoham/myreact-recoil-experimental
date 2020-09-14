import React from 'react';
import { StyledButton } from './styles';

const Button = ({ text, children, color, type, onClick }) => {
  return (
    <StyledButton type={type || "submit"} color={color} onClick={onClick}>
      {text || children}
    </StyledButton>
  )
}

export default Button;
