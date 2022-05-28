import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from '../Schema/Schema';

const useValidation = (schema) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return { handleSubmit, register, errors };
};

export default useValidation;
