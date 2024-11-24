import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
// import reslist from "../utils.js/mockData";

const Body = () => {

    const [reslistUpd, setreslist] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchtext] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);
        setreslist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false) return <h1>You are offline Gareeeebbb!!</h1>
    
    if(reslistUpd.length === 0)
    {
        console.log("Nishant")
        return <Shimmer/>
    }

    return (
        <div className="body px-28 pt-12 font-ubuntu text-[#424242]">
            <div className = "upperBody flex justify-between mb-4">

            <div className="w-80 h-10 flex justify-between rounded-md">
                <input type="text" placeholder="Search" className="p-4 mr-4 w-56 bg-[#E2F1E7] rounded"value={searchText} 
                onChange={(e) => {
                    setSearchtext(e.target.value);
                }}/>
                <button className="bg-[#424242] text-gray-200 w-32 rounded-lg hover:bg-slate-200 hover:text-[#424242]"
                onClick={() => {
                    const filteredlist = reslistUpd.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredlist);
                }}>Enter🔍</button>
            </div>
            <div className="filter">
                <button className="p-1 bg-[#424242] text-slate-200 rounded-lg border-2 border-[#424242] hover:bg-slate-200 hover:text-[#424242]"
                    onClick={() => {
                        const filteredlist = reslistUpd.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilteredRestaurants(filteredlist);
                    }}
                    >Top Rated Restaurants</button>
            </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="custom-link" ><Restaurantcard  resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>

    );
}

export default Body;