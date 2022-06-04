import loadingIcon from '../assets/loading.svg';

const Loading = () => {
  const style = {
    wrapper: 'flex flex-col mt-[15rem] items-center h-screen',
    logo: 'text-6xl font-bold',
    logoSub: 'text-3xl text-yellow',
    img: 'w-20',
  };

  return (
    <div className={style.wrapper}>
      <p className={style.logo}>
        NP<span className={style.logoSub}>Cafe</span>
      </p>
      <img className={style.img} src={loadingIcon} alt="loading...." />
    </div>
  );
};

export default Loading;
