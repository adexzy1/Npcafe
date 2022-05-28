import * as yup from 'yup';

const loginSchema = yup
  .object({
    loginEmail: yup.string().required('Email is required'),
    loginPassword: yup.string().required('Enter a valid Password'),
  })
  .required();

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

const settingsSchema = yup
  .object({
    fullName: yup.string().required('Full Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid Email'
      ),
    phone: yup
      .number()
      .required('Phone Number is required')
      .min(11, 'Enter a valid Phone Number')
      .max(11, 'Enter a valid Phone Number'),

    address: yup.string().required('Address is required'),
  })
  .required();

export { signupSchema, loginSchema, settingsSchema };
