import React from "react";
import { Link } from "react-router-dom";

function CartBill() {
  return (
    <div className="card shadow-lg w-[400px] mb-4 md:ml-4 max-md:w-full border-[1px] border-base-content border-opacity-30">
      <div className="card-body">
        <div className="font-bold">PRICE DETAILS :</div>
        <div>
          <pre /> Price (2 items) : ₹299
        </div>
        <div> - Discount : -₹20</div>
        <div> - Delivery Charges : ₹40</div>
        <div className="font-bold"> - Total : ₹319</div>
        <Link to="/place-order" className="btn btn-success">
          PLACE ORDER
        </Link>
      </div>
    </div>
  );
}

export default CartBill;
