import * as yup from 'yup';

const settingsSchema = yup
  .object({
    profileUrl: yup.object(),
    fullName: yup.string().required('Full Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid Email'
      ),
    phone: yup
      .number('Enter a valid Phone Number')
      .required('Phone Number is required')
      .typeError('Enter a valid Phone Number'),

    address: yup.string().required('Address is required'),
    password: yup.string().required('Enter a valid password'),
  })
  .required();

export default settingsSchema;
