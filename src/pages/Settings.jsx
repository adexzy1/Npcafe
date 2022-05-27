import React from 'react';
import UploadAvatar from '../components/UploadAvatar';
import Input from '../components/Input';
import TopBar from '../components/TopBar';

const Settings = () => {
  return (
    <section className="min-h-screen pt-5 pb-28">
      <TopBar text={'Settings'} />

      <form className="px-5">
        <>
          <UploadAvatar />
          <p className="text-sm pt-2">Upload Avatar</p>
        </>

        <Input type={'text'} label={'Full Name'} name={'fullName'} />
        <Input type={'email'} label={'Email'} name={'email'} />
        <Input type={'tel'} label={'Phone'} name={'phone'} />
        <Input type={'text'} label={'Address'} name={'address'} />

        <button className="w-full bg-yellow text-white mt-10 p-3.5 rounded-md">
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default Settings;
