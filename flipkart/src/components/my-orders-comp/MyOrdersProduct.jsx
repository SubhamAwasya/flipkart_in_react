import React from "react";
import { Link } from "react-router-dom";

function MyOrdersProduct() {
  return (
    <div className="mb-4 card card-side w-full bg-base-100 shadow-xl p-4 border-[1px] border-base-content border-opacity-30">
      <Link to={`/show-product/${1}`} className="aspect-square w-24 h-24">
        <img
          className="aspect-square w-24 h-24 rounded-md"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </Link>
      <div className="card-body p-0 pl-4">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h2 className="card-title">₹299</h2>

        <button className="btn btn-error btn-sm ml-auto">Cancle Order</button>
      </div>
    </div>
  );
}

export default MyOrdersProduct;
