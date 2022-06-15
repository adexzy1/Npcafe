import { signInWithEmailAndPassword } from 'firebase/auth';
import { FieldValues } from 'react-hook-form';
import { auth } from '../config/firebase';
import { error } from '../Model';

const useLogin = () => {
  const login = async (data: FieldValues) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return 'success';
    } catch (err) {
      return err as error;
    }
  };

  return [login];
};

export default useLogin;
