import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const PageLayout = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default PageLayout;
