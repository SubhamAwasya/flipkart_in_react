import { Link } from "react-router-dom";

// my
import useGlobalContext from "../../context/Context";

// icons
import { TiThMenu } from "react-icons/ti";
import { AiTwotoneShop } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { TiUser } from "react-icons/ti";

function NavOptions() {
  const { setToggleLogin, setToggleSignup, _LogOut, user } = useGlobalContext();

  function changeFocus(e) {
    document.activeElement.blur();
  }

  return (
    <div className="dropdown dropdown-end z-20">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle text-2xl"
      >
        <TiThMenu />
      </div>
      <ul
        onClick={changeFocus}
        tabIndex={0}
        className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
      >
        {user && (
          <>
            <li>
              <Link to="/cart">
                <FaShoppingCart className="text-xl" />
                Cart
              </Link>
            </li>
            <li>
              <Link to="/my-orders">
                <BiSolidPackage className="text-xl" />
                Orders
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <AiTwotoneShop className="text-xl" /> Shop
              </Link>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <button onClick={() => setToggleLogin(true)}>
                <TiUser className="text-xl" />
                Log In
              </button>
            </li>
            <li>
              <button onClick={() => setToggleSignup(true)}>
                <TiUserAdd className="text-xl" />
                Sign Up
              </button>
            </li>{" "}
          </>
        )}

        {user && (
          <li>
            <button
              className="btn btn-error btn-sm btn-outline mt-2"
              onClick={_LogOut}
            >
              <TiUser className="text-xl" />
              Log Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavOptions;
