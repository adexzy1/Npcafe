import * as yup from 'yup';

const signupSchema = yup
  .object({
    fullName: yup.string().required('Full Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid Email'
      ),
    password: yup
      .string()
      .required('Enter a valid Password')
      .matches(/^.{6,}$/, 'Password must be atleast 6 characters'),
  })
  .required();

export default signupSchema;
