import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from 'components/Input/Input';
import Combo from 'components/Combo/Combo';

const GamesForm = ({ title, consoles }) => {
  const initialValues = {
    title: title || '',
    consoles: consoles || '',
  }
  return (
    <Formik
      initialValues={initialValues}
    >
      {({ values }) => {
        console.log("val", values)
        return (
          <Form>
            <Field name="title">
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                  <Input field={field} meta={meta} placeholder="Title" />
                )}
            </Field>
            <Combo name="consoles" />
          </Form>
        )
      }
      }
    </Formik>
  )
}

export default GamesForm;
