import { CgHomeAlt } from 'react-icons/cg';
import { GiWallet } from 'react-icons/gi';
import { BiReceipt } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { RiUserReceived2Line } from 'react-icons/ri';
import NavLinks from './NavLinks';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../config/firebase';
import { toast } from 'react-toastify';
import { logOut } from '../../Redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../Redux/store';

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ toggle, setToggle }: Props) => {
  // redux hooks
  const { user } = useSelector((state: RootState) => state.user);
  const dipatch = useDispatch();

  // react router dom hooks
  const navigate = useNavigate();

  // logout function
  const handleLogOut = async () => {
    setToggle(false);

    await auth.signOut();

    dipatch(logOut());

    navigate('/');

    toast.success('Logged Out Success');
  };

  const style = {
    navWrapper: `absolute px-5 bg-white py-5 w-full bottom-[4rem] left-0 transform transition-all duration-500 ease-in-out rounded-t-2xl z-[-10] shadow  md:left-[unset] bottom-[100%] md:w-[12rem] md:h-screen md:rounded-none md:shadow-none md:border-r md:border-grey md:fixed ${
      toggle ? 'traslate-y-0' : 'translate-y-[100vh]'
    }`,
    logoWrapper: 'hidden md:block text-center py-3 mb-20 border-b',
    logo: 'text-5xl font-bold',
    logoSub: 'text-2xl text-yellow',
    btnWrapper: 'md:mt-[10rem]',
    btn: 'flex w-full items-center py-3 mb-2 gap-2 hover:px-2 hover:text-white rounded-lg px-2 hover:bg-yellow text-sm',
  };

  return (
    <nav className={style.navWrapper}>
      <Link to={'/'} className={style.logoWrapper}>
        <p className={style.logo}>
          NP<span className={style.logoSub}>Cafe</span>
        </p>
      </Link>

      <NavLinks to={'/'} icon={<CgHomeAlt />} setToggle={setToggle}>
        Home
      </NavLinks>

      <NavLinks to={'/wallet'} icon={<GiWallet />} setToggle={setToggle}>
        Wallet
      </NavLinks>

      <NavLinks to={'/orders'} icon={<BiReceipt />} setToggle={setToggle}>
        Orders
      </NavLinks>

      <NavLinks
        to={'/favourites'}
        icon={<MdOutlineFavoriteBorder />}
        setToggle={setToggle}
      >
        Favourites
      </NavLinks>

      <NavLinks
        to={'/settings'}
        icon={<IoSettingsOutline />}
        setToggle={setToggle}
      >
        Settings
      </NavLinks>

      <div className={style.btnWrapper}>
        {user ? (
          <button className={style.btn} onClick={handleLogOut}>
            <IoMdLogOut /> Log Out
          </button>
        ) : (
          <NavLinks
            to={'/login'}
            icon={<RiUserReceived2Line />}
            setToggle={setToggle}
          >
            Login / Sign up
          </NavLinks>
        )}
      </div>
    </nav>
  );
};

export default Menu;
