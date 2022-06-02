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
import Transaction from './components/transaction';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, DB } from './config/firebase';
import { setUser } from './Redux/UserSlice';
import RequireAuth from './pages/RequireAuth';
import { onValue, ref } from 'firebase/database';

function App() {
  // Redux hooks
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // get the number of total cart items
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  // set the current user object to the global state
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, email, uid, photoURL } = currentUser;

        const dbRef = ref(DB, 'users/' + currentUser.uid);
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();

          dispatch(
            setUser({
              displayName,
              email,
              uid,
              photoURL,
              phone: data.phone,
              address: data.address,
            })
          );
        });
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

          {/* protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<Transaction />} />
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
