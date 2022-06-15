import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';
// import { loginData, settings } from '../Model';

const useValidation = (schema: AnyObjectSchema) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return { handleSubmit, register, errors, watch, setValue };
};

export default useValidation;
