import React from 'react';
import { consoles } from 'utils/constants';
import { Select } from './styles';

interface Props {
  name: string;
}

const Combo = ({ name, ...props }: Props) => (
  <Select as="select" name={name} {...props} >
    <option value="">Select</option>
    {
      consoles.map(item => (
        <option key={item.id} value={item.name}>{item.name}</option>
      ))
    }
  </Select>
)

export default Combo;
