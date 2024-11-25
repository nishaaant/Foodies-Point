import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils.js/constants";
import { addItem } from "../utils.js/cartSlice";
const ItemList = ({ items }) => {
    // console.log(items)
    const dispatch = useDispatch()

    return (

        <div>
            {items.map((item) => (
                <div key = {item?.card?.info?.id} className="p-2 mx-auto my-2 h-32 w-11/12 border-b-2 border-slate">
                    <div className="mb-4 text-left flex justify-between">
                        <div className="w-10/12">
                            <span className="font-bold text-md">
                                {item?.card?.info?.name}
                            </span>
                            <span className="text-md">- ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                            </span>
                            <p className="text-sm my-4">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-2/12">
                            <button className="bg-[#424242] rounded-md border-2 border-[#424242] text-slate-200 hover:bg-slate-200 hover:text-[#424242] p-1 absolute"
                                onClick={() => {
                                    dispatch(addItem(item))
                                }}>
                                Add+
                            </button>
                            <img src={ITEM_IMG_URL + item.card.info.imageId}
                                className="w-9/12"></img>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;