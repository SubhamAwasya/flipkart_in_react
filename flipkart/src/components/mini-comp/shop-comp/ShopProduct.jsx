import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShopProduct() {
  const navigate = useNavigate();

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

        <div
          className="card-actions justify-end"
          onClick={(e) => e.preventDefault()}
        >
          <button
            className="btn btn-success btn-sm"
            onClick={() => navigate(`/edit-product/${1}`)}
          >
            Edit
          </button>
          <button className="btn btn-error btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;
