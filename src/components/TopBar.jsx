import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ text, link }) => {
  const navigate = useNavigate();

  return (
    <section className="flex text-2xl py-2 items-center px-5">
      <section
        onClick={() => navigate(link)}
        className="py-3 px-4 bg-grey mr-5 rounded-xl"
      >
        <HiOutlineArrowNarrowLeft />
      </section>

      <h1 className="font-semibold ">{text}</h1>
    </section>
  );
};

export default TopBar;
