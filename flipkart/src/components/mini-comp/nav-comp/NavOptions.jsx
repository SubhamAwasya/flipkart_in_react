import { Link } from "react-router-dom";
// icons
import { TiThMenu } from "react-icons/ti";
import useGlobalContext from "../../../context/Context";

function NavOptions() {
  const { setToggleLogin, setToggleSignup, setToggleCreateShop } =
    useGlobalContext();

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
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/my-orders">My Orders</Link>
        </li>
        <li>
          <Link to="/shop">My Shop</Link>
        </li>
        <li>
          <button onClick={() => setToggleLogin(true)}>Log In</button>
        </li>
        <li>
          <button onClick={() => setToggleSignup(true)}>Sign Up</button>
        </li>
        <li>
          <button onClick={() => setToggleCreateShop(true)}>Create Shop</button>
        </li>
        <li>
          <button className="btn btn-error btn-sm btn-outline">Log Out</button>
        </li>
      </ul>
    </div>
  );
}

export default NavOptions;
