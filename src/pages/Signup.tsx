import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import useSignup from '../hooks/UseSignup';
import loadingIcon from '../assets/loading.svg';
import useValidation from '../hooks/UseValidation';
import useHandleError from '../hooks/useHandleError';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import signupSchema from '../Schema/signupSchema';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { error } from '../Model';

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register, errors } = useValidation(signupSchema);
  const [handleError] = useHandleError();
  const [signup] = useSignup();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    // handle signup
    const response = await signup(data);
    if (response === 'success') {
      // show notification
      toast.success('Account Created successFully');
      setTimeout(() => {
        navigate('/');
      }, 750);
    } else {
      setIsLoading(false);
      // handle Error
      const errorResponse = await handleError(response as error);
      // show notification
      toast.error(errorResponse);
    }
  };

  const styles = {
    wrapper: 'md:w-[40rem] m-auto md:shadow md:p-7 md:rounded-lg',
    inputWrapper: 'relative',
    showPass:
      'absolute top-[30%] text-2xl right-3 text-darkGrey cursor-pointer',
    btn: 'bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md rounded-md hover:bg-yellowDark',
    loginWrapper: 'text-md text-center pt-5 text-darkGrey',
    login: 'text-yellow pl-1',
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full Name"
        type="text"
        {...register('fullName')}
        error={errors.fullName}
      />

      <Input
        label="Email"
        type="email"
        error={errors.email}
        {...register('email')}
      />

      <div className={styles.inputWrapper}>
        <Input
          label="Password"
          type={showPass ? 'text' : 'password'}
          {...register('password')}
          error={errors.password}
        />

        <div
          onClick={() => setShowPass((prev) => !prev)}
          className={styles.showPass}
        >
          {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </div>

      <button className={styles.btn}>
        {isLoading ? (
          <img className="w-12 m-auto" src={loadingIcon} alt="loading..." />
        ) : (
          'Create Account'
        )}
      </button>

      <section className={styles.loginWrapper}>
        Already have an Account?
        <Link className={styles.login} to={'/login'}>
          Log in
        </Link>
      </section>
    </form>
  );
};

export default Signup;
