import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";

function DummyProduct({ product }) {
  return (
    <Link
      to={`/show-product/${1}`}
      className="card w-full min-w-36 max-w-80 bg-base-100 mx-auto shadow-xl shadow-base-300 border-[1px] border-base-content border-opacity-30"
    >
      <figure>
        <img className="aspect-square " src={product.thumbnail} alt="Shoes" />
      </figure>
      <div className="p-2">
        <h1 className="line-clamp-2 font-bold">{product.title}</h1>
        <p>₹{product.price}</p>
        <div className="badge badge-success ">
          {product.rating} <GoStarFill />
        </div>
      </div>
    </Link>
  );
}

export default DummyProduct;
