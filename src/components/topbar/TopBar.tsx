import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

interface props {
  text: string;
  link: string;
}

const TopBar = ({ text, link }: props) => {
  const navigate = useNavigate();

  const styles = {
    wrapper: 'flex text-2xl py-2 items-center flex-1',
    btn: 'py-3 px-4 bg-grey mr-5 rounded-xl cursor-pointer md:bg-white',
    h1: 'font-semibold',
  };

  return (
    <section className={styles.wrapper}>
      {link && (
        <button
          type="button"
          onClick={() => navigate(link)}
          className={styles.btn}
        >
          <HiOutlineArrowNarrowLeft />
        </button>
      )}

      <h1 className={styles.h1}>{text}</h1>
    </section>
  );
};

export default TopBar;
