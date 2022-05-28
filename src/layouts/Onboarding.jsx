import { Link, Outlet } from 'react-router-dom';

const Onboarding = () => {
  const style = {
    wrapper: 'px-5',
    logo: 'text-6xl font-bold pt-10 text-center',
    logoSub: 'text-2xl text-yellow',
  };

  return (
    <section className={style.wrapper}>
      <Link to={'/'}>
        <p className={style.logo}>
          NP<span className={style.logoSub}>Cafe</span>
        </p>
      </Link>

      <section className="pt-10">
        <Outlet />
      </section>
    </section>
  );
};

export default Onboarding;
