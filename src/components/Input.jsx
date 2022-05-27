import css from '../css/Input.module.css';

const Input = ({ name, label, type }) => {
  return (
    <div className={css.wrapper}>
      <input className={css.input} type={type} name={name} placeholder=" " />
      <label className={css.label}>{label}</label>
    </div>
  );
};

export default Input;
