import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from 'components/Input/Input';
import Combo from 'components/Combo/Combo';
import Button from 'components/Button/Button';

const GamesForm = ({ title, consoles }) => {
  const initialValues = {
    title: title || '',
    consoles: consoles || '',
  }

  const handleSubmit = (data) => {
    console.log("data", data)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
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
            <Button text="Submit" />
          </Form>
        )
      }
      }
    </Formik>
  )
}

export default GamesForm;
