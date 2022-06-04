import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import useValidation from '../hooks/UseValidation';
import useLogin from '../hooks/useLogin';
import useHandleError from '../hooks/useHandleError';
import { toast } from 'react-toastify';
import loadingIcon from '../assets/loading.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import loginSchema from '../Schema/loginSchema';

const Login = () => {
  // state
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //  react-router-dom hooks
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  // custom hooks
  const { handleSubmit, errors, register } = useValidation(loginSchema);
  const [handleError] = useHandleError();
  const [login] = useLogin();

  // sunmit form function
  const onSubmit = async (data) => {
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
        navigate(from, { replace: true });
      }, 750);
    } else {
      // set loading to false
      setIsLoading(false);
      // handle error function
      const errorResult = await handleError(response);
      // show error notification
      toast.error(errorResult);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        name="email"
        type="email"
        {...register('email')}
        error={errors.email}
      />

      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={showPass ? 'text' : 'password'}
          {...register('password')}
          error={errors.password}
        />

        <div
          onClick={() => setShowPass((prev) => !prev)}
          className="absolute top-[30%] text-2xl right-3 text-darkGrey"
        >
          {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </div>

      <section className="text-darkGrey text-sm pt-3 text-right">
        <Link to={'/'}>Forgot Password ?</Link>
      </section>

      <button
        type="submit"
        className="bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md"
      >
        {isLoading ? (
          <img className="w-12 m-auto" src={loadingIcon} alt="loading..." />
        ) : (
          'Login'
        )}
      </button>

      <section className="text-md text-center pt-5 text-darkGrey">
        Don’t have an Account?
        <Link className="text-yellow pl-1" to={'/signup'}>
          Sign up
        </Link>
      </section>
    </form>
  );
};

export default Login;
