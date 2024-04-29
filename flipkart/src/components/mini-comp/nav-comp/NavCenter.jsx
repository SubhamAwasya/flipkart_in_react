import Theme from "../Theme";

function NavCenter() {
  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-lg max-md:hidden"
        />
      </div>
    </>
  );
}

export default NavCenter;
