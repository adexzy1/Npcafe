import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const RequireAuth = () => {
  return <>{auth.currentUser ? <Outlet /> : <Navigate to={'/login'} />}</>;
};

export default RequireAuth;
