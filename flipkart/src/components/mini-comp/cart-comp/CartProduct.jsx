function CartProduct() {
  return (
    <div className="mb-4 card card-side w-full bg-base-100 shadow-xl shadow-base-300 ">
      <img
        className="w-20 h-20 mt-8 ml-2 rounded-sm"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />

      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h2 className="card-title">₹299</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
