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
        console.log(json);
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
        <div className="body">
            <div className = "upperBody">

            <div className="search">
                <input type="text" className="search-bar"value={searchText} 
                onChange={(e) => {
                    setSearchtext(e.target.value);
                }}/>
                <button
                onClick={() => {
                    const filteredlist = reslistUpd.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredlist);
                }}>Search🔍</button>
            </div>
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredlist = reslistUpd.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilteredRestaurants(filteredlist);
                    }}
                    >#Pyaaare</button>
            </div>
            </div>
            <div className="restaurant-cards-section">
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