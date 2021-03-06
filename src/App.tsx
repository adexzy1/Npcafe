import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotals } from './Redux/CartSlice';
import Cart from './components/cart/Cart';
import Favourites from './pages/Favourites';
import Wallet from './pages/Wallet';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import PageLayout from './layouts/PageLayout';
import Onboarding from './layouts/Onboarding';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Loading from './components/loading/Loading';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, DB } from './config/firebase';
import { setUser } from './Redux/UserSlice';
import RequireAuth from './pages/RequireAuth';
import { onValue, ref } from 'firebase/database';
import { RootState } from './Redux/store';
import { useAppDispatch } from './hooks/useDispatch';
import { getProducts } from './Redux/ProductSlice';

function App() {
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [hideCartRoute, setHideCartRoute] = useState(false);
  // Redux hooks
  const dispatch = useAppDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const width = window.screen.width;
  // hide cart route
  useEffect(() => {
    if (width >= 768) {
      setHideCartRoute(true);
    }
  }, [width]);

  // get Products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // get the number of total cart items
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  // set the current user object to the global state
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // destructure the currentuser object
        const { displayName, email, uid, photoURL } = currentUser;

        const dbRef = ref(DB, 'users/' + currentUser.uid);

        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();

          dispatch(
            setUser({
              displayName: displayName!,
              email: email!,
              uid: uid,
              photoURL: photoURL!,
              phone: data.phone,
              address: data.address,
            })
          );
        });

        // stop loading state
        setIsLoading(false);
      } else {
        dispatch(setUser(null));
        // stop loading state
        setIsLoading(false);
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <ToastContainer
            theme="dark"
            autoClose={1000}
            hideProgressBar={true}
            pauseOnHover={true}
            position="top-right"
          />

          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />

              {/* protected Routes */}
              <Route element={<RequireAuth />}>
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>

            <Route element={<Onboarding />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {!hideCartRoute && <Route path="/cart" element={<Cart />} />}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
