import avatar from '../assets/avatar.png';
import { IoCameraOutline } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

const UploadAvatar = () => {
  const inputRef = useRef();
  const [uploader, setUploader] = useState(false);
  const [filePreview, setFilePreview] = useState('');
  const [image, setImage] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    if (file && file.type.substr(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage('');
    }
  };

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

      <img
        src={filePreview ? filePreview : avatar}
        alt="user avatar"
        className="object-contain cursor-pointer"
      />

      <input
        type="file"
        accept="image/*"
        name="uploadImage"
        className="hidden"
        ref={inputRef}
        onChange={(e) => handleUpload(e)}
      />
    </section>
  );
};

export default UploadAvatar;
