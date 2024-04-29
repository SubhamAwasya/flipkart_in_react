import React, { useState } from "react";

// my
import Product from "../components/Product.jsx";
import { ProductCategory } from "../constant/Category.js";
import CreateProduct from "../components/CreateProduct.jsx";
import Grid from "../components/mini-comp/Grid.jsx";
import RecivedOrders from "../components/mini-comp/shop-comp/RecivedOrders.jsx";
import YourProducts from "../components/mini-comp/shop-comp/YourProducts.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    specifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({ name: "", price: "", category: "", specifications: "" });
  };

  return (
    <div className="p-4 md:mx-20">
      <CreateProduct
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        ProductCategory={ProductCategory}
      />

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
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <YourProducts />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Orders"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <RecivedOrders />
        </div>
      </div>
    </div>
  );
};

export default Shop;
