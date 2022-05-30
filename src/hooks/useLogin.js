import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const useLogin = () => {
  const login = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return 'success';
    } catch (err) {
      return err;
    }
  };

  return [login];
};

export default useLogin;
