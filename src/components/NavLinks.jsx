import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavLinks = ({ children, to, icon, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const style = {
    link: `flex items-center py-3 mb-2 gap-2 hover:bg-yellow hover:text-white rounded-lg whitespace-nowrap px-2 md:text-sm ${
      match && 'bg-yellow text-white'
    }`,
    icon: ``,
  };

  const handleToggle = () => {
    const width = window.screen.width;
    if (width >= 768) {
      props.setToggle(false);
    } else {
      props.setToggle((prev) => !prev);
    }
  };
  return (
    <div onClick={handleToggle}>
      <Link className={style.link} to={to}>
        <i className={style.icon}>{icon}</i>
        {children}
      </Link>
    </div>
  );
};

export default NavLinks;
