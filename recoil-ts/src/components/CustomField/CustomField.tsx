import React from 'react';
import { Field, FieldProps } from 'formik';
import { ErrorMessage } from './styles';

interface Props {
  name: string;
  children: JSX.Element;
}

const CustomField = ({ name, children }: Props) => (
  <Field name={name}>
    {
      ({ field, meta }: FieldProps) => {
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


