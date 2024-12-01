import { IMG_URL } from "../utils.js/constants";

const Restaurantcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } = resData?.info;

  return (
    <div className="p-4 mx-4 my-4 w-[270px] h-[440px] rounded-lg border border-gray-300 shadow-lg bg-white hover:shadow-xl hover:border-[#10375C] transition-all duration-300">
      {/* Restaurant Image */}
      <img
        className="h-48 w-full rounded-md object-cover"
        src={IMG_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Restaurant Details */}
      <div className="mt-4">
        <h3 className="font-bold text-xl text-[#10375C] truncate">{name}</h3>
        <p
          className={`text-sm font-medium mt-2 ${
            avgRating >= 4
              ? "text-green-600"
              : avgRating >= 3
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {avgRating} ⭐
        </p>
        <p className="text-gray-500 text-sm mt-2 truncate">{cuisines.join(", ")}</p>
        <p className="text-gray-400 text-sm mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export default Restaurantcard;
