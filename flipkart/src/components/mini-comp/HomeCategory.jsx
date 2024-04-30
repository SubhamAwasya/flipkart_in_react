import React from "react";
import { ProductCategory } from "../../constant/Category";

function HomeCategory() {
  return (
    <div
      id="home_category"
      className="flex overflow-scroll gap-1 mx-3 ml-10 max-md:ml-3 rounded-lg"
    >
      {ProductCategory.map((c, i) => (
        <button key={i} className="btn btn-sm btn-active">
          {c}
        </button>
      ))}
    </div>
  );
}

export default HomeCategory;
