import UploadAvatar from '../components/uploadAvater/UploadAvatar';
import Input from '../components/input/Input';
import TopBar from '../components/topbar/TopBar';
import { useSelector } from 'react-redux';
import settingsSchema from '../Schema/settingsSchema';
import ConfirmPassWord from '../components/confirmPassword/confirmPassWord';
import { useState } from 'react';
import useSettings from '../hooks/useSettings';
import { toast } from 'react-toastify';
import useHandleError from '../hooks/useHandleError';
import { RootState } from '../Redux/store';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { error } from '../Model';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Settings = () => {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Redux Hooks
  const { user } = useSelector((state: RootState) => state.user);

  // Custom hooks
  const { settings } = useSettings();
  const [handleError] = useHandleError();

  // input field default values
  const defaultValues: FieldValues = {
    fullName: user?.displayName,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    password: '',
    photoUrl: user?.photoURL,
  };

  // React hook forms
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(settingsSchema),
    mode: 'onBlur',
    defaultValues,
  });

  // the form submit function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // setIsLoading(true);
    console.log(data);
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

  // show comfirm passwprd modal
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
              error={errors.fullName}
            />

            <Input
              type={'email'}
              label={'Email'}
              {...register('email')}
              error={errors.email}
            />
          </div>

          <div className={styles.formGroup}>
            <Input
              type={'tel'}
              label={'Phone'}
              {...register('phone')}
              error={errors.phone}
            />

            <Input
              type={'text'}
              label={'Address'}
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

        {showModal && (
          <ConfirmPassWord
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
