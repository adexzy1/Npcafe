import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useValidation = (schema) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return { handleSubmit, register, errors, watch, setValue };
};

export default useValidation;
