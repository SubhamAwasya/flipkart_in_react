import React, { useState } from "react";

// my
import CreateProduct from "../components/CreateProduct.jsx";
import RecivedOrders from "../components/mini-comp/shop-comp/RecivedOrders.jsx";
import YourProducts from "../components/mini-comp/shop-comp/YourProducts.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.price.value);
    console.log(e.target.category.value);
    console.log(e.target.specifications.value);
    console.log(e.target.product_image.value);
  };

  return (
    <div className="p-4 md:mx-20">
      <CreateProduct handleSubmit={handleSubmit} />
      <div role="tablist" className="tabs tabs-lifted tabs-lg mt-4">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab min-w-40"
          aria-label="Your Products"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box "
        >
          <YourProducts />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Recived Orders"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box"
        >
          <RecivedOrders />
        </div>
      </div>
    </div>
  );
};

export default Shop;
