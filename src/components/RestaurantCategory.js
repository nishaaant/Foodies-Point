import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="mx-auto my-6 w-8/12">
      {/* Category Header */}
      <div
        className={`p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${
          showItems ? "bg-yellow-50" : ""
        }`}
        onClick={handleClick}
      >
        <h1 className="font-semibold text-lg text-[#10375C]">
          {data.title} ({data.itemCards.length})
        </h1>
        <span
          className={`text-xl font-bold transform transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          🔻
        </span>
      </div>

      {/* Item List */}
      {showItems && (
        <div className="mt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
