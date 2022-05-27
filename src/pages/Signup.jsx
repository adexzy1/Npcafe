import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <form>
      <Input label="Full Name" name="FullName" type="text" />
      <Input label="Email" name="email" type="email" />

      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={showPass ? 'text' : 'password'}
        />

        <div
          onClick={() => setShowPass((prev) => !prev)}
          className="absolute top-[30%] text-2xl right-3 text-gray-400"
        >
          {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </div>

      <button className="bg-yellow text-white w-full text-lg mt-10 py-3.5 block rounded-md">
        Login
      </button>

      <section className="text-md text-center pt-5 text-gray-400">
        Already have an Account?
        <Link className="text-yellow pl-1" to={'/login'}>
          Log in
        </Link>
      </section>
    </form>
  );
};

export default Signup;
