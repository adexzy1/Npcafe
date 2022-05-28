import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const useLogin = () => {
  const login = async (data) => {
    const { loginEmail, loginPassword } = data;
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      return 'success';
    } catch (err) {
      return err;
    }
  };

  return [login];
};

export default useLogin;
