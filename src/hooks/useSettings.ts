import { updateEmail, updateProfile } from 'firebase/auth';
import { set, ref as REF } from 'firebase/database';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, DB, storage } from '../config/firebase';
import { setUser } from '../Redux/UserSlice';
import { useAppDispatch } from './useDispatch';
import { FieldValues } from 'react-hook-form';
import { error } from '../Model';

const useSettings = () => {
  const dispatch = useAppDispatch();

  const settings = async (data: FieldValues) => {
    const { email, password, photoUrl, fullName, phone, address } = data;
    const oldEmail = auth.currentUser!.email;
    try {
      await signInWithEmailAndPassword(auth, oldEmail!, password);

      // update user email address
      await updateEmail(auth.currentUser!, email);

      // dont Run the code if
      if (typeof photoUrl !== 'string') {
        // get the image file extension
        const extention = photoUrl.type.split('/')[1];
        // storage refrence
        const storageRef = ref(
          storage,
          'ProfileImages/' + auth.currentUser!.uid + `.${extention}`
        );

        // upload profile Image to firebase storage
        await uploadBytes(storageRef, photoUrl);
        // get uploaded file url
        let downloadUrl = await getDownloadURL(storageRef);

        // update the user Phone number
        await updateProfile(auth.currentUser!, {
          photoURL: downloadUrl,
        });
      }

      // update the user profile User Full name
      await updateProfile(auth.currentUser!, {
        displayName: fullName,
      });

      // update user user details in the realtime database
      const docRef = REF(DB, 'users/' + auth.currentUser!.uid);
      await set(docRef, {
        phone: phone,
        address: address,
      });

      // set golbal state to currentuser details

      dispatch(
        setUser({
          displayName: auth.currentUser!.displayName!,
          email: auth.currentUser!.email!,
          uid: auth.currentUser!.uid,
          photoURL: auth.currentUser!.photoURL!,
          phone: phone,
          address: address,
        })
      );

      return 'success';
    } catch (error) {
      return error as error;
    }
  };

  return { settings };
};

export default useSettings;
