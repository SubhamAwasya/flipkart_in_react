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
      <div className="min-w-10 w-10">
        <img
          className="rounded-full"
          alt="Tailwind CSS Navbar component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </>
  );
}

export default NavRight;
