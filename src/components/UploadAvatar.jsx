import avatar from '../assets/avatar.png';
import { IoCameraOutline } from 'react-icons/io5';
import { useEffect, useState, forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';

const UploadAvatar = forwardRef(({ setValue, ...props }, ref) => {
  const { user } = useSelector((state) => state.user);

  const [uploader, setUploader] = useState(false);
  const [image, setImage] = useState('');
  const [filePreview, setFilePreview] = useState('');

  // set user avatar
  const photoUrl = user?.photoUrl ? user.photoURL : avatar;

  const inputRef = useRef();

  // handle the image upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file.type.slice(0, 5) === 'image') {
      setImage(file);
      setValue('photoUrl', file);
    } else {
      setImage('');
    }
  };

  // Read and set avatar to the file uploaded
  useEffect(() => {
    if (image) {
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setFilePreview(fileReader.result);
      };
      fileReader.readAsDataURL(image);
    } else {
      setFilePreview('');
    }
  }, [image]);

  return (
    <section
      onMouseOver={() => setUploader(true)}
      onMouseLeave={() => setUploader(false)}
      className=" w-[6rem] h-[6rem] rounded-full overflow-hidden relative mt-10 border border-yellow"
    >
      <div
        onClick={() => inputRef.current.click()}
        className={`absolute  ${
          uploader ? 'bottom-0' : 'bottom-[-100%]'
        } h-full w-full flex bg-rgba text-white transition-all duration-300`}
      >
        <IoCameraOutline className="m-auto text-3xl" />
      </div>

      <input
        type="text"
        className="hidden"
        value={photoUrl}
        name="photoUrl"
        {...props}
        ref={ref}
      />

      <input
        type="file"
        accept="image/*"
        name="photoUrl"
        className="hidden"
        ref={inputRef}
        onChange={(e) => handleUpload(e)}
      />

      <img
        src={
          filePreview ? filePreview : user?.photoURL ? user.photoURL : avatar
        }
        alt="user avatar"
        className="object-cover w-full h-full cursor-pointer"
      />
    </section>
  );
});

export default UploadAvatar;
