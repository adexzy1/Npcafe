import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavLinks = ({ children, to, icon, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const style = {
    link: `flex items-center py-3 mb-2 gap-2 hover:bg-yellow hover:px-2 hover:text-white rounded-lg`,
    icon: ``,
  };
  return (
    <div>
      <Link className={style.link} to={to}>
        <i className={style.icon}>{icon}</i>
        {children}
      </Link>
    </div>
  );
};

export default NavLinks;
