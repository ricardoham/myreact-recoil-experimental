import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Input from 'components/Input/Input';
import Combo from 'components/Combo/Combo';
import Button from 'components/Button/Button';
import CustomField from 'components/CustomField/CustomField';
import { useRecoilState, useRecoilValue } from 'recoil';
import { saveFavGame } from 'recoil/games/selectors';

const GamesForm = ({ title, consoles }) => {
  // const test = useRecoilValue(saveFavGame())
  // const [test, setTest] = useRecoilState(saveFavGame)
  const initialValues = {
    title: title || '',
    consoles: consoles || '',
  }

  const validationSchema = yup.object().shape({
    title: yup.string().required("Game title is required"),
    consoles: yup.string().required("Need a vendor select"),
  })

  const handleSubmit = (data) => {
    console.log("data", data)
    saveFavGame(data)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => {
        // console.log("val", values);
        return (
          <Form>
            <CustomField name="title">
              <Input placeholder="Title" />
            </CustomField>
            <CustomField name="consoles">
              <Combo name="consoles" />
            </CustomField>
            <Button text="Submit" />
          </Form>
        )
      }
      }
    </Formik>
  )
}

export default GamesForm;
