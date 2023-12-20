import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import { LocaleContext } from "../../context/Locale";

const Navbar = ({ logoutHandler, name, isAuth = true }) => {
  const { theme, toggle } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <>
      <div className="flex flex-row justify-between w-full lg:px-28 px-10 mx-auto h-16 p-3 items-center border-y-2">
        <div className="">
          <Link to="/">
            <h1 className="text-4xl font-bold">Notes</h1>
          </Link>
        </div>
        <div className="text-end flex flex-row gap-4">
          {isAuth && (
            <Link to="/archives">
              <h1 className="text-xl font-bold">Archive</h1>
            </Link>
          )}
          <button onClick={toggleLocale}>
            {locale === "id" ? "English" : "Indonesia"}
          </button>
          <button onClick={toggle}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
          {isAuth && (
            <button onClick={logoutHandler}>
              <IoIosLogOut className="text-2xl" />
            </button>
          )}
          {isAuth && <p className="text-lg font-bold">{name}</p>}
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  isAuth: PropTypes.bool,
  logoutHandler: PropTypes.func,
  name: PropTypes.string,
};

export default Navbar;
