import SearchInput from "./mini-comp/SearchInput";
import NavLeft from "./mini-comp/nav-comp/NavLeft";
import NavRight from "./mini-comp/nav-comp/NavRight";

function NavBar() {
  return (
    <div className="navbar bg-base-100 z-50 md:px-10 px-3">
      <div className="navbar-start ">
        <NavLeft />
      </div>
      <div className="navbar-center lg:flex max-md:hidden">
        <SearchInput />
      </div>
      <div className="navbar-end">
        <NavRight />
      </div>
    </div>
  );
}

export default NavBar;
