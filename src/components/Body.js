import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Body = () => {
  const [reslistUpd, setreslist] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setreslist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1 className="text-center text-red-600 text-2xl">You are offline! Check your connection.</h1>;

  if (reslistUpd.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-12 lg:px-28 pt-12 font-ubuntu text-[#10375C]">
      {/* Search and Filter Section */}
      <div className="upperBody flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
        {/* Search Box */}
        <div className="w-full lg:w-auto flex items-center gap-4">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="p-4 w-full lg:w-64 bg-[#E2F1E7] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#10375C]"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-[#10375C] text-gray-200 rounded-lg hover:bg-slate-200 hover:text-[#10375C] transition-all duration-300"
            onClick={() => {
              const filteredlist = reslistUpd.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredlist);
            }}
          >
            Search 🔍
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="px-6 py-3 bg-[#10375C] text-gray-200 rounded-lg border border-[#10375C] hover:bg-slate-200 hover:text-[#10375C] transition-all duration-300"
          onClick={() => {
            const filteredlist = reslistUpd.filter((res) => res.info.avgRating > 4.5);
            setFilteredRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants ⭐
        </button>
      </div>

      {/* Restaurant List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="custom-link"
          >
            <Restaurantcard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
