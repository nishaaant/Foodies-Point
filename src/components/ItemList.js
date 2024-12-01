import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils.js/constants";
import { addItem } from "../utils.js/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 mx-auto w-11/12 bg-white shadow-md rounded-lg flex justify-between items-center border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Item Info */}
          <div className="w-9/12">
            <h3 className="font-bold text-lg text-[#10375C]">
              {item?.card?.info?.name}
            </h3>
            <p className="text-md text-gray-600">
              ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-sm text-gray-500 mt-2">{item?.card?.info?.description}</p>
          </div>

          {/* Image and Add Button */}
          <div className="w-3/12 text-center flex flex-col items-center">
            <img
              src={ITEM_IMG_URL + item.card.info.imageId}
              alt={item?.card?.info?.name}
              className="w-20 h-20 rounded-md object-cover mb-2"
            />
            <button
              className="bg-[#10375C] text-white font-semibold px-4 py-1 rounded-lg hover:bg-yellow-400 hover:text-[#10375C] transition-all duration-300"
              onClick={() => {
                dispatch(addItem(item));
              }}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
