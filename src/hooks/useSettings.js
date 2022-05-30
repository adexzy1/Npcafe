import { updateEmail, updateProfile } from 'firebase/auth';
import { set, ref as REF } from 'firebase/database';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth, DB, storage } from '../config/firebase';
import { setUser } from '../Redux/UserSlice';

const useSettings = () => {
  const dispatch = useDispatch();

  const settings = async (data) => {
    const { email, password, photoUrl, fullName, phone, address } = data;

    try {
      await signInWithEmailAndPassword(auth, auth.currentUser.email, password);

      // update user email address
      await updateEmail(auth.currentUser, email);

      if (typeof data.photoUrl !== 'string') {
        // get the image file extension
        const extention = photoUrl.type.split('/')[1];
        // storage refrence
        const storageRef = ref(
          storage,
          'ProfileImages/' + auth.currentUser.uid + extention
        );

        // upload profile Image to firebase storage
        await uploadBytes(storageRef, photoUrl);
        // get uploaded file url
        var photoURL = await getDownloadURL(storageRef);
      }

      // update the user profile details
      await updateProfile(auth.currentUser, {
        photoURL: photoURL,
        displayName: fullName,
      });

      // update user user details in the realtime database
      const docRef = REF(DB, 'users/' + auth.currentUser.uid);
      await set(docRef, {
        phone: phone,
        address: address,
      });

      // set golbal state to currentuser details
      dispatch(
        setUser({
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          photoURL: auth.currentUser.photoURL,
        })
      );

      return 'success';
    } catch (error) {
      return error;
    }
  };

  return { settings };
};

export default useSettings;
