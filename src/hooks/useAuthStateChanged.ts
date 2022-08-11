import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './useDispatch';
import { auth, DB } from '../config/firebase';
import { onValue, ref } from 'firebase/database';
import { setUser } from '../Redux/UserSlice';

const useAuthStateChanged = () => {
  // state
  const [isLoading, setIsLoading] = useState(true);

  // Redux hooks
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // destructure the currentuser object
        const { displayName, email, uid, photoURL } = currentUser;

        const dbRef = ref(DB, 'users/' + currentUser.uid);

        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();

          const response = dispatch(
            setUser({
              displayName: displayName!,
              email: email!,
              uid: uid,
              photoURL: photoURL!,
              phone: data.phone,
              address: data.address,
            })
          );

          // stop loading state if user is not empty
          if (response.payload !== null) {
            setIsLoading(false);
          }
        });
      } else {
        // set user to null if no current user
        dispatch(setUser(null));
        // stop loading state
        setIsLoading(false);
      }
    });
  }, [dispatch]);

  return { isLoading };
};

export default useAuthStateChanged;
