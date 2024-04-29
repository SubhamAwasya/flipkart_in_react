import React from "react";

function SearchInput() {
  return (
    <div className="join w-full">
      <input
        className="input input-bordered h-10 w-full join-item"
        placeholder="Search"
      />
      <button className="join-item btn btn-neutrals btn-sm h-10 border-opacity-25 border-base-content">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
