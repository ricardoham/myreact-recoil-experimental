import React from 'react';
import { consoles } from 'utils/constants';
import { Select } from './styles';

const Combo = ({ name, ...props }) => (
  <Select as="select" name={name} {...props} >
    <option value="">Select</option>
    {
      consoles.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))
    }
  </Select>
)

export default Combo;
