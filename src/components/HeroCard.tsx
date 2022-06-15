import { useSelector } from 'react-redux';
import pattern from '../assets/Thur.svg';
import { RootState } from '../Redux/store';

const HeroCard = () => {
  const { user } = useSelector((state: RootState) => state.user);

  let username = user ? user.displayName.split(' ')[0] : '';

  const style = {
    container: 'm-5 bg-[#feecd4] flex  rounded-lg overflow-hidden h-[12rem]',
    heroWrapper: 'p-5 flex items-center gap-5  w-[50rem] max-w-full m-auto',
    h3: 'font-bold text-xl',
    p: 'text-xs py-1',
    btn: 'bg-yellow px-4 py-2 text-sm mt-2 rounded-2xl text-white',
  };

  return (
    <section className={style.container}>
      <section className={style.heroWrapper}>
        <div className="max-w-[9rem]">
          <img
            src="https://ik.imagekit.io/oz87xfgij/AppImg/tr:w-300/hero_836XGdawp.png"
            alt="hero avatar"
          />
        </div>

        <div className="ml-4">
          <h3 className={style.h3}>Hello {user && username}</h3>
          <p className={style.p}>
            Get free delivery on every{' '}
            <span className="text-yellow">₦2000</span> purchase
          </p>
          <button className={style.btn}>Learn More</button>
        </div>
      </section>

      <section className="hidden sm:block sm:w-full sm:h-ful">
        <img
          src={pattern}
          alt="pattern"
          className="object-cover sm:w-full sm:h-ful sm:h-full"
        />
      </section>
    </section>
  );
};

export default HeroCard;
