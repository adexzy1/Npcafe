import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

const useValidation = (
  schema: AnyObjectSchema,
  defaultValues?: FieldValues
) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
    control,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  });

  return {
    handleSubmit,
    register,
    errors,
    watch,
    setValue,
    control,
  };
};

export default useValidation;
