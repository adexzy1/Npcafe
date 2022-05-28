import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { DB, auth } from '../config/firebase';
import { set, ref } from 'firebase/database';

const useSignup = () => {
  const signUp = async (details) => {
    const { fName, email, password } = details;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fName,
      });

      const docRef = ref(DB, 'users/' + auth.currentUser.uid);
      await set(docRef, {
        phone: '',
        address: '',
      });

      return 'success';
    } catch (err) {
      return err;
    }
  };

  return [signUp];
};

export default useSignup;
