import { GoStarFill } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa6";
import Specifications from "../components/mini-comp/Specifications";

function ShowProduct() {
  return (
    <div className="flex mx-20 max-sm:mx-1 my-10 px-5 max-w-[1920px] max-md:flex-col max-md:items-center">
      <div>
        <h1 className="text-4xl font-bold">Product Name</h1>
        <figure>
          <img
            className="rounded-xl"
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="justify-between">
          <p>Price : ₹299</p>
          <span>Rating : </span>
          <div className="badge badge-success ">
            4.3 <GoStarFill />
          </div>
          <div className="card-actions mt-2">
            <button className="btn btn-neutral">Go to Cart</button>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <Specifications />
    </div>
  );
}

export default ShowProduct;
