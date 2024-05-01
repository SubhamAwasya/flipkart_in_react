import CartBill from "../components/cart-comp/CartBill";
import CartProduct from "../components/cart-comp/CartProduct";

function Cart() {
  return (
    <div className="flex max-sm:items-center max-md:flex-col-reverse max-sm:m-0 md:px-10 px-4">
      <div className="flex flex-col w-full">
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
