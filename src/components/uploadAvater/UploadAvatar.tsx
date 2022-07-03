import { IoCameraOutline } from 'react-icons/io5';
import { useEffect, useState, forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { RootState } from '../../Redux/store';

interface Props {
  setValue: UseFormSetValue<FieldValues>;
}

const UploadAvatar = forwardRef<HTMLInputElement, Props>((props, ref) => {
  // Props
  const { setValue, ...otherProps } = props;

  // state
  const [uploader, setUploader] = useState(false);
  const [image, setImage] = useState<Blob | null>(null);
  const [filePreview, setFilePreview] = useState<any>();

  // Redux Hooks
  const { user } = useSelector((state: RootState) => state.user);

  // placeholder iamge
  const avatarPlaceHolder =
    'https://ik.imagekit.io/oz87xfgij/AppImg/Male-placeholder_ZMbO2jQp1.jpeg';

  // set user avatar
  const photoUrl = user?.photoURL ? user.photoURL : avatarPlaceHolder;

  const inputRef = useRef<HTMLInputElement>(null);

  // handle the image upload
  const handleUpload = (files: FileList | null) => {
    const file = files![0];
    if (files![0].type.slice(0, 5) === 'image') {
      setImage(file);
      setValue('photoUrl', file);
    } else {
      setImage(null);
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
      setFilePreview(null);
    }
  }, [image]);

  const style = {
    wrapper:
      'w-[6rem] h-[6rem] rounded-full overflow-hidden relative mt-10 border border-yellow',
    img: 'object-cover w-full h-full cursor-pointer',
    input: ' hidden',
    div: `absolute  ${
      uploader ? 'bottom-0' : 'bottom-[-100%]'
    } h-full w-full flex bg-rgba text-white transition-all duration-300 cursor-pointer`,
  };

  return (
    <section
      onMouseOver={() => setUploader(true)}
      onMouseLeave={() => setUploader(false)}
      className={style.wrapper}
    >
      <div onClick={() => inputRef.current!.click()} className={style.div}>
        <IoCameraOutline className="m-auto text-3xl" />
      </div>

      <input
        type="text"
        className={style.input}
        value={photoUrl}
        name="photoUrl"
        {...otherProps}
        ref={ref}
      />

      <input
        type="file"
        accept="image/*"
        name="photoUrl"
        className={style.input}
        ref={inputRef}
        onChange={(e) => handleUpload(e.target.files)}
      />

      <img
        src={filePreview ? filePreview : photoUrl}
        alt="user avatar"
        className={style.img}
      />
    </section>
  );
});

export default UploadAvatar;
