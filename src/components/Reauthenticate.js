import Input from './Input';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useState, forwardRef } from 'react';
import loadingIcon from '../assets/loading.svg';
import { MdOutlineCancel } from 'react-icons/md';

const Reauthenticate = forwardRef(
  ({ setShowModal, isLoading, error, setIsLoading, ...otherProps }, ref) => {
    const [showPass, setShowPass] = useState(false);

    const handleCancel = () => {
      setShowModal(false);
      setIsLoading(false);
    };

    return (
      <section className="absolute bg-rgba h-screen w-full top-0 px-5 pt-[30%] z-30">
        <section className="bg-white p-5 rounded-lg">
          <button
            onClick={handleCancel}
            className="absolute right-10 text-2xl text-yellow"
          >
            <MdOutlineCancel />
          </button>

          <section className="text-xl font-semibold text-center pt-10">
            Enter Password
          </section>

          <div className="relative">
            <Input
              label="Password"
              name="password"
              type={showPass ? 'text' : 'password'}
              {...otherProps}
              error={error}
              ref={ref}
            />

            <div
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-[30%] text-2xl right-3 text-darkGrey"
            >
              {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>

          <button
            type="submit"
            className="bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md"
          >
            {isLoading ? (
              <img className="w-12 m-auto" src={loadingIcon} alt="loading..." />
            ) : (
              'Save Changes'
            )}
          </button>
        </section>
      </section>
    );
  }
);

export default Reauthenticate;
