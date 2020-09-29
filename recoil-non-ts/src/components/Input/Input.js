import React from 'react';
import { StyledInput } from './styles';

const Input = ({ placeholder, ...props }) => (
  <StyledInput placeholder={placeholder} {...props} />
)

export default Input;
