import { CgHomeAlt } from 'react-icons/cg';
import { GiWallet } from 'react-icons/gi';
import { BiReceipt } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import NavLinks from './NavLinks';

const Menu = ({ toggle }) => {
  const style = {
    navWrapper: `px-5 bg-white py-5  bottom-[4rem] absolute w-screen left-0 transform transition-all duration-500 ease-in-out rounded-t-2xl z-[-10]  ${
      toggle ? 'traslate-y-0' : 'translate-y-[100vh]'
    }`,
  };

  return (
    <nav className={style.navWrapper}>
      <NavLinks to={'/'} icon={<CgHomeAlt />}>
        Home
      </NavLinks>
      <NavLinks to={'/'} icon={<GiWallet />}>
        Wallet
      </NavLinks>
      <NavLinks to={'/'} icon={<BiReceipt />}>
        Orders
      </NavLinks>
      <NavLinks to={'/'} icon={<MdOutlineFavoriteBorder />}>
        Favourites
      </NavLinks>
      <NavLinks to={'/'} icon={<IoSettingsOutline />}>
        Settings
      </NavLinks>
    </nav>
  );
};

export default Menu;
