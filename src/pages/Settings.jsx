import UploadAvatar from '../components/UploadAvatar';
import Input from '../components/Input';
import TopBar from '../components/TopBar';
import useValidation from '../hooks/UseValidation';
import { useSelector } from 'react-redux';
import settingsSchema from '../Schema/settingsSchema';
import Reauthenticate from '../components/Reauthenticate';
import { useState } from 'react';
import useSettings from '../hooks/useSettings';
import { toast } from 'react-toastify';
import useHandleError from '../hooks/useHandleError';

const Settings = () => {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Redux Hooks
  const { user } = useSelector((state) => state.user);

  // custom Hooks
  const { handleSubmit, register, errors, watch, setValue } =
    useValidation(settingsSchema);
  const { settings } = useSettings();
  const [handleError] = useHandleError();

  // React-hook-froms watch method to track input changes
  const fullName = watch(
    'fullName',
    user?.displayName ? user.displayName : 'john'
  );
  const email = watch('email', user?.email ? user.email : 'test@test.com');
  const phone = watch('phone', '07065368281');
  const address = watch('address', '22 amoke alasela');

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);

    // save settings in database
    const response = await settings(data);

    if (response === 'success') {
      setIsLoading(false);
      setShowModal(false);
      //   display success notification
      toast.success('Settings saved Succeefully');
    } else {
      // set loading to false
      setIsLoading(false);
      const errorResponse = handleError(response);
      toast.error(errorResponse);
    }
  };

  return (
    <section className="min-h-screen pt-5 pb-28">
      <TopBar text={'Settings'} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="px-5">
          <>
            <UploadAvatar {...register('photoUrl')} setValue={setValue} />
            <p className="text-sm pt-2">Upload Avatar</p>
          </>

          <Input
            type={'text'}
            label={'Full Name'}
            name={'fullName'}
            {...register('fullName')}
            value={fullName}
            error={errors.fullName}
          />
          <Input
            type={'email'}
            label={'Email'}
            name={'email'}
            {...register('email')}
            error={errors.email}
            value={email}
          />
          <Input
            type={'tel'}
            label={'Phone'}
            name={'phone'}
            {...register('phone')}
            value={phone}
            error={errors.phone}
          />
          <Input
            type={'text'}
            label={'Address'}
            name={'address'}
            value={address}
            {...register('address')}
            error={errors.address}
          />

          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="bg-yellow text-white w-full text-lg mt-10 h-14 block rounded-md"
          >
            Save Changes
          </button>
        </section>

        {/* Reauthentication Modal component*/}
        {showModal && (
          <Reauthenticate
            setShowModal={setShowModal}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            {...register('password')}
            error={errors.password}
          />
        )}
      </form>
    </section>
  );
};

export default Settings;
