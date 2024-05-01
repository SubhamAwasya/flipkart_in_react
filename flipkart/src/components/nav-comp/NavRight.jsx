import { Link } from "react-router-dom";
import Theme from "../mini-comp/Theme.jsx";
import useGlobalContext from "../../context/Context.jsx";

// icons
import { FaShoppingCart } from "react-icons/fa";
import NavOptions from "./NavOptions.jsx";

function NavRight() {
  const { user } = useGlobalContext();
  return (
    <>
      {/* Profile */}
      {user && (
        <span className="flex items-center gap-2">
          <Link to="/cart" className="btn btn-ghost btn-circle max-md:hidden">
            <FaShoppingCart className="w-full h-5" />
          </Link>

          {user.username}
          <div className="min-w-10 w-10 ">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </span>
      )}
      <Theme />
      <NavOptions />
    </>
  );
}

export default NavRight;
