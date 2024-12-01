import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {
  // useParams applied
  const { resId } = useParams();

  // Custom Hooks applied
  const resInfo = useRestaurantMenu(resId);

  // Return shimmer while loading
  if (resInfo == null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="mx-auto my-8 w-10/12 bg-white shadow-lg rounded-lg p-6">
      {/* Restaurant Info Section */}
      <div className="text-center border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="font-extrabold text-3xl text-[#10375C]">{name}</h1>
        <p className="font-semibold text-lg text-gray-500 mt-2">{cuisines.join(", ")}</p>
        <div className="flex justify-center gap-6 mt-4">
          <p className="bg-[#F3C623] text-[#10375C] font-medium text-sm px-4 py-2 rounded-full">
            {costForTwoMessage}
          </p>
          <p className="bg-green-100 text-green-700 font-medium text-sm px-4 py-2 rounded-full">
            {avgRating} ⭐
          </p>
        </div>
      </div>

      {/* Restaurant Menu Categories */}
      <div>
        {categories.map((category) => (
          <RestaurantCategory
            key={category.card?.card.title}
            data={category.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurantmenu;
