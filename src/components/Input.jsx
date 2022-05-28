import css from '../css/Input.module.css';
import { forwardRef } from 'react';
import useValidation from '../hooks/UseValidation';

const Input = forwardRef(({ name, type, label, error, ...otherProps }, ref) => {
  const { register } = useValidation();

  return (
    <div className={css.wrapper}>
      <input
        className={`${css.input} ${error && css.error}`}
        type={type}
        name={name}
        placeholder=" "
        {...otherProps}
        ref={ref}
      />
      <label className={css.label}>{label}</label>

      <p className={css.errorText}>{error?.message}</p>
    </div>
  );
});

export default Input;
