import React from 'react';
import { StyledInput } from './styles';

interface Props {
  placeholder: string;
}

const Input = ({ placeholder, ...props }: Props) => (
  <StyledInput placeholder={placeholder} {...props} />
)

export default Input;
