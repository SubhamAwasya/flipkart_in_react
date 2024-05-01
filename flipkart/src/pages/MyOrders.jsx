import React from "react";
import MyOrdersProduct from "../components/my-orders-comp/MyOrdersProduct";

function MyOrders() {
  return (
    <div className="mx-4 md:mx-20 ">
      <h1 className="text-4xl font-bold mx-auto mb-4"> Orders :</h1>
      <MyOrdersProduct />
      <MyOrdersProduct />
      <MyOrdersProduct />
      <MyOrdersProduct />
      <MyOrdersProduct />
      <MyOrdersProduct />
    </div>
  );
}

export default MyOrders;
