import { Link } from "react-router-dom";
import Theme from "../Theme";
import useGlobalContext from "../../../context/Context";

// icons
import { FaShoppingCart } from "react-icons/fa";
import NavOptions from "./NavOptions.jsx";

function NavRight() {
  const { setToggleLogin, setToggleSignup } = useGlobalContext();
  return (
    <>
      <ul className="menu menu-horizontal px-1 gap-1 items-center">
        <li>
          <Link to="/cart" className="btn btn-ghost btn-circle max-md:hidden">
            <FaShoppingCart className="w-full h-5" />
          </Link>
        </li>
      </ul>
      <Theme />
      <NavOptions />
      {/* Profile */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavRight;
