import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItem = useSelector((store)=> store.cart.items)
    return (
      <div className="mx-auto p-2 w-8/12">
        <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={()=> {
          dispatch(clearCart())
        }}>
          Clear cart
        </button>
        </div>
        {cartItem == 0 && <h1>Cart is Empty - Please add some Items</h1>}
        <div>
          <ItemList items = {cartItem}/>
        </div>
      </div>
    )
  }
  
  export default Cart;