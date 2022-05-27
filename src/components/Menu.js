import { CgHomeAlt } from 'react-icons/cg';
import { GiWallet } from 'react-icons/gi';
import { BiReceipt } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { RiUserReceived2Line } from 'react-icons/ri';
import NavLinks from './NavLinks';

const Menu = ({ toggle, setToggle }) => {
  const style = {
    navWrapper: `px-5 bg-white py-5  bottom-[4rem] absolute w-screen left-0 transform transition-all duration-500 ease-in-out rounded-t-2xl z-[-10] shadow  ${
      toggle ? 'traslate-y-0' : 'translate-y-[100vh]'
    }`,
  };

  const user = false;

  return (
    <nav className={style.navWrapper}>
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

      {user ? (
        <NavLinks to={'/'} icon={<IoMdLogOut />} setToggle={setToggle}>
          Log Out
        </NavLinks>
      ) : (
        <NavLinks
          to={'/login'}
          icon={<RiUserReceived2Line />}
          setToggle={setToggle}
        >
          Login / Sign up
        </NavLinks>
      )}
    </nav>
  );
};

export default Menu;
