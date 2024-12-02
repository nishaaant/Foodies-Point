import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils.js/cartSlice";
import { ITEM_IMG_URL } from "../utils.js/constants";

const ItemList = ({ items, showRemoveButton = false }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center border-b-2 p-4 mx-auto w-11/12"
        >
          {/* Item Details */}
          <div className="w-8/12">
            <h3 className="font-bold text-lg">{item.card.info.name}</h3>
            <p className="text-sm text-gray-600">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="text-sm text-gray-500 mt-2">{item.card.info.description}</p>
          </div>

          {/* Item Image */}
          <div className="w-4/12 flex flex-col items-center">
            <img
              src={`${ITEM_IMG_URL}${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="h-24 w-24 rounded-md mb-2"
            />
            <button
              className="bg-[#424242] text-white px-4 py-1 rounded-md hover:bg-gray-200 hover:text-[#424242] mt-1"
              onClick={() => dispatch(addItem(item))}
            >
              Add+
            </button>
            {showRemoveButton && (
              <button
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-300 mt-2"
                onClick={() => dispatch(removeItem(item.card.info.id))}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
