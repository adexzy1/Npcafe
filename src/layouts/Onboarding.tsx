import { Link, Outlet, Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';
const Onboarding = () => {
  const style = {
    wrapper: 'px-5',
    logo: 'text-6xl font-bold pt-10 text-center',
    logoSub: 'text-2xl text-yellow',
    outlet: 'pt-10',
  };

  return (
    <>
      {auth.currentUser ? (
        <Navigate to={'/'} />
      ) : (
        <section className={style.wrapper}>
          <Link to={'/'}>
            <p className={style.logo}>
              NP<span className={style.logoSub}>Cafe</span>
            </p>
          </Link>

          <section className={style.outlet}>
            <Outlet />
          </section>
        </section>
      )}
    </>
  );
};

export default Onboarding;
