import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/input/Input';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import useValidation from '../hooks/UseValidation';
import useLogin from '../hooks/useLogin';
import useHandleError from '../hooks/useHandleError';
import { toast } from 'react-toastify';
import loadingIcon from '../assets/loading.svg';
import { useNavigate } from 'react-router-dom';
import loginSchema from '../Schema/loginSchema';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { error } from '../Model';

const Login = () => {
  // state
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //  react-router-dom hooks
  const navigate = useNavigate();

  // custom hooks
  const { handleSubmit, errors, register } = useValidation(loginSchema);
  const [handleError] = useHandleError();
  const [login] = useLogin();

  // sunmit form function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    // login function
    const response = await login(data);

    // check if login is successful or there is an error
    if (response === 'success') {
      // set loading to false
      setIsLoading(false);
      // show a success notification
      toast.success('You are logged in successfully');
      // navigate to dashboard
      setTimeout(() => {
        navigate('/');
      }, 750);
    } else {
      // set loading to false
      setIsLoading(false);
      // handle error function
      const errorResult = await handleError(response as error);
      // show error notification
      toast.error(errorResult);
    }
  };

  const styles = {
    wrapper: 'md:w-[40rem] m-auto md:shadow md:p-7 md:rounded-lg',
    showPass:
      'absolute top-[30%] text-2xl right-3 text-darkGrey cursor-pointer',
    inputWrapper: 'relative',
    forgotPass: 'text-darkGrey text-sm pt-3 text-right',
    btn: 'bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md hover:bg-yellowDark',
    createAcc: 'text-md text-center pt-5 text-darkGrey',
    signup: 'text-yellow pl-1',
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email}
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

      <section className={styles.forgotPass}>
        <Link to={'/'}>Forgot Password ?</Link>
      </section>

      <button type="submit" className={styles.btn}>
        {isLoading ? (
          <img className="w-12 m-auto" src={loadingIcon} alt="loading..." />
        ) : (
          'Login'
        )}
      </button>

      <section className={styles.createAcc}>
        Don&apos;t have an Account?
        <Link className={styles.signup} to={'/signup'}>
          Sign up
        </Link>
      </section>
    </form>
  );
};

export default Login;
