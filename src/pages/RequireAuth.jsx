import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ userId }) => {
  return !userId ? <Navigate to={'/login'} /> : <Outlet />;
};

export default RequireAuth;
