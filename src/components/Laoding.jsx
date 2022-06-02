import loadingIcon from '../assets/loading.svg';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Laoding = () => {
  const { user } = useSelector((state) => state.user);

  const style = {
    wrapper: 'flex flex-col mt-[15rem] items-center h-screen',
    logo: 'text-6xl font-bold',
    logoSub: 'text-3xl text-yellow',
    img: 'w-20',
  };

  return (
    <>
      {!user.uid ? (
        <div className={style.wrapper}>
          <p className={style.logo}>
            NP<span className={style.logoSub}>Cafe</span>
          </p>
          <img className={style.img} src={loadingIcon} alt="loading...." />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Laoding;
