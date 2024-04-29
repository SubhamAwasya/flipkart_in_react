import { Link } from "react-router-dom";

function CartProduct() {
  return (
    <Link
      to={`/show-product/${1}`}
      className="mb-4 card card-side w-full bg-base-100 shadow-xl p-4 border-[1px] border-base-content border-opacity-30"
    >
      <img
        className="aspect-square w-24 h-24 rounded-sm"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />

      <div className="card-body p-0 pl-4">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h2 className="card-title">₹299</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Remove from Cart</button>
        </div>
      </div>
    </Link>
  );
}

export default CartProduct;
