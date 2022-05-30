import * as yup from 'yup';

const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid Email'
      ),

    password: yup.string().required('Password is required'),
  })
  .required();

export default loginSchema;
