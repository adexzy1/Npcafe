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

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register, errors } = useValidation(signupSchema);
  const [handleError] = useHandleError();
  const [signup] = useSignup();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
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
      const errorResponse = await handleError(response);
      // show notification
      toast.error(errorResponse);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full Name"
        name="fullName"
        type="text"
        {...register('fullName')}
        error={errors.fullName}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        error={errors.email}
        {...register('email')}
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

      <button className="bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md">
        {isLoading ? (
          <img className="w-12 m-auto" src={loadingIcon} alt="loading..." />
        ) : (
          'Create Account'
        )}
      </button>

      <section className="text-md text-center pt-5 text-darkGrey">
        Already have an Account?
        <Link className="text-yellow pl-1" to={'/login'}>
          Log in
        </Link>
      </section>
    </form>
  );
};

export default Signup;
