import { useState } from "react";
import { Link } from "react-router-dom";

function CartProduct() {
  const [quantity, setQuantity] = useState(1);

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
          className="card-actions justify-between"
          onClick={(e) => e.preventDefault()}
        >
          {/* Quantity */}
          <div className="join z-10" onClick={(e) => e.preventDefault()}>
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
              className="join-item btn btn-neutral btn-square btn-sm"
            >
              -1
            </button>
            <div className="join-item btn w-14 btn-sm" name="options">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="join-item btn btn-neutral btn-square btn-sm"
            >
              +1
            </button>
          </div>

          <button className="btn btn-primary btn-sm">Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
