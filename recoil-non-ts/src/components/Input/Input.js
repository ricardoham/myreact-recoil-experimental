import React from 'react';
import { StyledInput, ErrorMessage } from './styles';

const Input = ({ placeholder, ...props }) => (
  <StyledInput placeholder={placeholder} {...props} />
)

export default Input;
