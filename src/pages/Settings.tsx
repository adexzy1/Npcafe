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
import { RootState } from '../Redux/store';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { error } from '../Model';

const Settings = () => {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Redux Hooks
  const { user } = useSelector((state: RootState) => state.user);

  // custom Hooks
  const { handleSubmit, register, errors, watch, setValue } =
    useValidation(settingsSchema);
  const { settings } = useSettings();
  const [handleError] = useHandleError();

  // React-hook-froms watch method to track input changes
  const fullName = watch('fullName', user?.displayName ? user.displayName : '');
  const email = watch('email', user?.email ? user.email : '');
  const phone = watch('phone', user?.phone ? user.phone : '');
  const address = watch('address', user?.address ? user.address : '');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
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
      const errorResponse = await handleError(response as error);
      toast.error(errorResponse);
    }
  };

  const handleModal = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const styles = {
    wrapper: 'min-h-screen pt-5 md:pt-8 pb-28 md:pb-10 relative',
    inputContainer:
      'md:p-10 md:rounded-xl lg:w-[70%] md:bg-white md:mx-auto md:mt-10',
    topbar: 'px-5',
    form: 'px-5',
    uploadAvatarText: 'text-sm pt-2',
    formGroup: 'md:flex gap-12 md:pt-5',
    saveChanges:
      'bg-yellow hover:bg-yellowDark text-white w-full text-lg mt-10 h-14 block rounded-md md:w-1/2 md:mx-auto md:mt-14',
  };

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.topbar}>
          <TopBar text={'Settings'} link={'/'} />
        </div>

        <section className={styles.inputContainer}>
          <section>
            <UploadAvatar {...register('photoUrl')} setValue={setValue} />
            <p className={styles.uploadAvatarText}>Upload Avatar</p>
          </section>

          <div className={styles.formGroup}>
            <Input
              type={'text'}
              label={'Full Name'}
              {...register('fullName')}
              value={fullName}
              error={errors.fullName}
            />
            <Input
              type={'email'}
              label={'Email'}
              {...register('email')}
              error={errors.email}
              value={email}
            />
          </div>

          <div className={styles.formGroup}>
            <Input
              type={'tel'}
              label={'Phone'}
              {...register('phone')}
              value={phone}
              error={errors.phone}
            />
            <Input
              type={'text'}
              label={'Address'}
              value={address}
              {...register('address')}
              error={errors.address}
            />
          </div>

          <button
            onClick={handleModal}
            type="button"
            className={styles.saveChanges}
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
