import CartBill from "../components/mini-comp/cart-comp/CartBill";
import CartProduct from "../components/mini-comp/cart-comp/CartProduct";

function Cart() {
  return (
    <div className="flex justify-center max-sm:items-center max-md:flex-col-reverse max-sm:m-0 px-10">
      <div className="flex flex-col items-center w-full h-3/5 mx-auto max-sm:m-0">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <CartBill />
    </div>
  );
}

export default Cart;
