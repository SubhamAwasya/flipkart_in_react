import { GoStarFill } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Product({ productId }) {
  return (
    <Link
      to={`/show-product/${productId}`}
      className="card w-full min-w-64 max-w-80 bg-base-100 mx-auto shadow-xl shadow-base-300"
    >
      <figure>
        <img
          className="aspect-square "
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="p-2">
        <h2 className="card-title">Puma Shoes! comfortabe to wear</h2>
        <p>₹299</p>
        <div className="flex justify-between">
          <div className="badge badge-success ">
            4.3 <GoStarFill />
          </div>
          <button
            onClick={() => console.log("clicked")}
            className="btn btn-sm justify-end -mt-4 "
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
