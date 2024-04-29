import React from "react";
import { ProductCategory } from "../../constant/Category";

function HomeCategory() {
  return (
    <div className="ml-10 max-md:ml-3 gap-1 flex flex-wrap">
      {ProductCategory.map((c, i) => (
        <button key={i} className="btn btn-sm btn-active ">
          {c}
        </button>
      ))}
    </div>
  );
}

export default HomeCategory;
