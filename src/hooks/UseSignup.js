import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { DB, auth } from '../config/firebase';
import { set, ref } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/UserSlice';

const useSignup = () => {
  const dispatch = useDispatch();

  const signUp = async (details) => {
    const { fullName, email, password } = details;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });

      const docRef = ref(DB, 'users/' + auth.currentUser.uid);
      await set(docRef, {
        phone: '',
        address: '',
      });

      dispatch(
        setUser({
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          photoURL: auth.currentUser.photoURL,
        })
      );

      return 'success';
    } catch (err) {
      return err;
    }
  };

  return [signUp];
};

export default useSignup;
