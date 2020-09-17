import React from 'react';
import { Field } from 'formik';
import { ErrorMessage } from './styles';

const CustomField = ({ name, children }) => (
  <Field name={name}>
    {
      ({ field, meta }) => {
        return (
          <>
            {
              children &&
              React.cloneElement(
                children,
                {
                  ...children.props,
                  ...field,
                  ...meta,
                }
              )
            }
            {
              (meta.error && meta.touched) && (
                <ErrorMessage>{meta.error}</ErrorMessage>
              )
            }
          </>
        )
      }
    }
  </Field>
);

export default CustomField;


