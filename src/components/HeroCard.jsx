import hero from '../assets/hero.png';
import { useSelector } from 'react-redux';

const HeroCard = () => {
  const { user } = useSelector((state) => state.user);

  if (user) {
    var username = user.displayName.split(' ')[0];
  }

  const style = {
    heroWrapper: 'm-5 p-5 flex bg-[#feecd4] items-center rounded-lg',
    h3: 'font-bold text-xl',
    p: 'text-xs py-1',
    btn: 'bg-yellow px-4 py-2 text-sm mt-2 rounded-2xl text-white',
  };

  return (
    <section className={style.heroWrapper}>
      <div className="max-w-[10rem]">
        <img src={hero} alt="hero avatar" />
      </div>
      <div className="ml-4">
        <h3 className={style.h3}>Hello {user && username}</h3>
        <p className={style.p}>
          Get free delivery on every <span className="text-yellow">₦2000</span>{' '}
          purchase
        </p>
        <button className={style.btn}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroCard;
