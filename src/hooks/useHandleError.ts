import { error } from '../Model';

const useHandleError = () => {
  const handleError = async (error: error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'Account Already exist please login';

      case 'auth/user-not-found':
        return 'No User with this credentials';

      case 'auth/wrong-password':
        return 'Wrong login credentials';

      default:
        return 'An error occured try again later';
    }
  };

  return [handleError];
};

export default useHandleError;
