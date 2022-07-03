import Input from '../input/Input';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useState, forwardRef } from 'react';
import loadingIcon from '../../assets/loading.svg';
import { MdOutlineCancel } from 'react-icons/md';
import { FieldError } from 'react-hook-form';

interface Props {
  setShowModal: any;
  isLoading: any;
  error: FieldError | undefined;
  setIsLoading: any;
}

const Reauthenticate = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { setShowModal, isLoading, error, setIsLoading, ...otherProps } = props;
  const [showPass, setShowPass] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
    document.body.style.overflowY = 'initial';
    setIsLoading(false);
  };

  const styles = {
    wrapper: 'absolute bg-rgba h-full w-full top-0 md:pt-0 flex z-30',
    container: 'bg-white p-5 rounded-lg w-[22rem] md:w-[25rem] relative m-auto',
    cancelBtn: 'absolute right-5 text-2xl text-yellow',
    enterPass: 'text-xl font-semibold text-center pt-10',
    inputWrapper: 'relative',
    showPass:
      'absolute top-[30%] text-2xl right-3 text-darkGrey cursor-pointer',
    btn: 'bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md',
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.container}>
        <button onClick={handleCancel} className={styles.cancelBtn}>
          <MdOutlineCancel />
        </button>

        <section className={styles.enterPass}>Enter Password</section>

        <div className={styles.inputWrapper}>
          <Input
            label="Password"
            type={showPass ? 'text' : 'password'}
            {...otherProps}
            error={error}
            ref={ref}
          />

          <div
            onClick={() => setShowPass((prev) => !prev)}
            className={styles.showPass}
          >
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        <button type="submit" className={styles.btn}>
          {isLoading ? (
            <img className="w-12 m-auto" src={loadingIcon} alt="loading..." />
          ) : (
            'Save Changes'
          )}
        </button>
      </section>
    </section>
  );
});

export default Reauthenticate;
