import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <section className="bg-[#d1d0d2]">
      <Header />
      <Outlet />
    </section>
  );
};

export default Layout;
