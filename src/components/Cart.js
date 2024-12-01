import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    if (cartItems.length > 0) {
      dispatch(clearCart());
      alert("Cart has been cleared!");
    } else {
      alert("Cart is already empty.");
    }
  };

  return (
    <div className="mx-auto p-4 w-8/12">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="font-bold text-3xl">Your Cart</h1>
        <button
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h2 className="text-xl text-gray-600 text-center mt-8">
          Your cart is empty! Add some delicious items to proceed. 🍔
        </h2>
      ) : (
        <div>
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
