import React from 'react';
import { Field } from 'formik';
import { consoles } from 'utils/constants';

const Combo = ({ name }) => {
  return (
    <Field as="select" name={name}>
      <option value="">Select</option>
      {
        consoles.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))
      }
    </Field>
  )
}

export default Combo;
