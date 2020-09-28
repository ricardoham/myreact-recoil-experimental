import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Input from 'components/Input/Input';
import Combo from 'components/Combo/Combo';
import Button from 'components/Button/Button';
import CustomField from 'components/CustomField/CustomField';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useSaveFavGame, saveFavGame } from 'recoil/games/selectors';
import { Form, FormContent } from './styles';

interface Props {
  title?: string;
  consoles?: any
}

const GamesForm = ({ title, consoles }: Props) => {
  // const setTest = useSetRecoilState(saveFavGame)
  const setFavGame = useSaveFavGame();
  const initialValues = {
    title: title || '',
    consoles: consoles || '',
  }

  const validationSchema = yup.object().shape({
    title: yup.string().required("Game title is required"),
    consoles: yup.string().required("Need a vendor select"),
  })

  const handleSubmit = (data: any) => {
    // setTest(data)
    setFavGame(data)
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
            <h3>Add new Fav Game</h3>
            <FormContent>
              <CustomField name="title">
                <Input placeholder="Title" />
              </CustomField>
              <CustomField name="consoles">
                <Combo name="consoles" />
              </CustomField>
            </FormContent>
            <Button text="Submit" />
          </Form>
        )
      }
      }
    </Formik>
  )
}

export default GamesForm;