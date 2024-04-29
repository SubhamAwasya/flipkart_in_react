import { Link } from "react-router-dom";
// icons
import { TiThMenu } from "react-icons/ti";
import useGlobalContext from "../../../context/Context";

function NavOptions() {
  const { setToggleLogin, setToggleSignup, setToggleCreateShop } =
    useGlobalContext();

  return (
    <div className="dropdown dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle text-2xl"
      >
        <TiThMenu />
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 gap-1 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
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
