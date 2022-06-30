import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const HeroCard = () => {
  const { user } = useSelector((state: RootState) => state.user);

  let username = user ? user.displayName.split(' ')[0] : '';

  const style = {
    container:
      'm-5 max-w-[100%] bg-[#feecd4] flex rounded-lg overflow-hidden sm:h-[12rem] xl:w-[75%] xl:mx-auto',
    heroWrapper: ` p-5 h-full flex items-center gap-3 flex-1  m-auto`,
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

      <section className="hidden sm:block flex-[0.7] lg:flex-1">
        <img
          src="https://ik.imagekit.io/oz87xfgij/AppImg/tr:h-500px/Thur_8CRfkQvA3.png"
          alt="pattern"
          className="object-cover sm:w-full sm:h-full "
        />
      </section>
    </section>
  );
};

export default HeroCard;
