import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Onboarding from '../layouts/Onboarding';
import PageLayout from '../layouts/PageLayout';
import Favourites from '../pages/Favourites';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import RequireAuth from '../pages/RequireAuth';
import Settings from '../pages/Settings';
import Signup from '../pages/Signup';
import Wallet from '../pages/Wallet';
// const Cart = lazy(() => import('../components/cart/Cart'));
// const Favourites = lazy(() => import('../pages/Favourites'));
// // const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Signup = lazy(() => import('../pages/Signup'));
// const Orders = lazy(() => import('../pages/Orders'));
// const RequireAuth = lazy(() => import('../pages/RequireAuth'));
// const Settings = lazy(() => import('../pages/Settings'));
// const Wallet = lazy(() => import('../pages/Wallet'));

const AppRoutes = () => {
  const [hideCartRoute, setHideCartRoute] = useState(false);

  const width = window.screen.width;
  // hide cart route
  useEffect(() => {
    if (width >= 768) {
      setHideCartRoute(true);
    }
  }, [width]);

  return (
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
  );
};

export default AppRoutes;
