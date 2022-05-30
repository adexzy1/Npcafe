import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from './Redux/CartReducer';
import Cart from './components/Cart';
import Favourites from './pages/Favourites';
import Wallet from './pages/Wallet';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import PageLayout from './layouts/PageLayout';
import Onboarding from './layouts/Onboarding';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { setUser } from './Redux/UserSlice';
import RequireAuth from './pages/RequireAuth';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, email, uid, photoURL } = currentUser;

        const userData = {
          displayName,
          email,
          uid,
          photoURL,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
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

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
