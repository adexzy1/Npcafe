import { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface Props {
  children: string;
  to: string;
  icon: ReactNode;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ children, to, icon, setToggle }: Props) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const style = {
    link: `flex items-center py-3 mb-2 gap-2 hover:bg-yellow hover:text-white rounded-lg whitespace-nowrap px-2 md:text-sm  hover:bg-yellowDark ${
      match && 'bg-yellow text-white'
    }`,
  };

  const handleToggle = () => {
    const width = window.screen.width;
    if (width >= 768) {
      setToggle(false);
    } else {
      setToggle((prev) => !prev);
    }
  };
  return (
    <div onClick={handleToggle}>
      <Link className={style.link} to={to}>
        <i>{icon}</i>
        {children}
      </Link>
    </div>
  );
};

export default NavLinks;
