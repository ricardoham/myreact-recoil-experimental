import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 18px;
  background-color: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.2);
`;

export const FormContent = styled.div`
  margin-bottom: 12px;
`;
