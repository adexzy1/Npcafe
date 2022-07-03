import css from './Input.module.css';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface props {
  type: string;
  label: string;
  error: FieldError | undefined;
  value?: string;
}

const Input = forwardRef<HTMLInputElement, props>((props, ref) => {
  const { type, label, error, ...otherProps } = props;
  return (
    <div className={css.wrapper}>
      <input
        className={`${css.input} ${error && css.error}`}
        type={type}
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
