import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="p-4 mx-auto w-8/12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <h2 className="text-center text-lg">Your cart is empty. Please add some items!</h2>
      ) : (
        <ItemList items={cartItems} showRemoveButton={true} />
      )}
    </div>
  );
};

export default Cart;
