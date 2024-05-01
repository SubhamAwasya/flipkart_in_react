import React, { useState } from "react";

// my
import RecivedOrders from "../components/shop-comp/RecivedOrders.jsx";
import YourProducts from "../components/shop-comp/YourProducts.jsx";
import CreateProduct from "../components/shop-comp/CreateProduct.jsx";

// icons
import { MdAddHome } from "react-icons/md";
import useGlobalContext from "../context/Context.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const { setToggleCreateShop } = useGlobalContext();

  const [shop, setShop] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.price.value);
    console.log(e.target.category.value);
    console.log(e.target.specifications.value);
    console.log(e.target.product_image.value);
  };

  if (shop) {
    return (
      <div className="flex flex-col w-full mb-[20%] justify-center items-center">
        <h1 className="text-3xl font-bold text-center mt-[20%]">
          You have no shop !
        </h1>

        <div className="btn btn-success mt-4" onClick={setToggleCreateShop}>
          <MdAddHome className="mr-2 text-2xl" /> Create Shop
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:mx-20">
      <h1 className="text-3xl font-bold mb-4">Shop :- Name</h1>
      <CreateProduct />
      <div role="tablist" className="tabs tabs-lifted tabs-lg mt-4">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab min-w-32 text-sm leading-4"
          aria-label="My Products"
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
          className="tab min-w-40 text-sm leading-4"
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
