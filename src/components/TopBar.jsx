import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ text }) => {
  const navigate = useNavigate();

  return (
    <section className="flex text-2xl items-center px-5">
      <section
        onClick={() => navigate('/')}
        className="py-3 px-4 bg-grey mr-3 rounded-xl"
      >
        <HiOutlineArrowNarrowLeft />
      </section>

      <h1 className="font-semibold">{text}</h1>
    </section>
  );
};

export default TopBar;
