import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <form>
      <Input label="Email" name="email" type="email" />

      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={showPass ? 'text' : 'password'}
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

      <button className="bg-yellow text-white w-full text-lg mt-10 py-3.5 block rounded-md">
        Login
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
