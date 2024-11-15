import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import reslist from "../utils.js/mockData";

const Body = () => {

    const [reslistUpd, setreslist] = useState([]);
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
    }

    if(reslistUpd.length === 0)
    {
        return <Shimmer />
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
                    const filteredlist = reslistUpd.filter((res)=> res.data.name == searchText);
                    setreslist(filteredlist);
                }}>Search🔍</button>
            </div>
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredlist = reslistUpd.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setreslist(filteredlist);
                    }}
                    >#Pyaaare</button>
            </div>
            </div>
            <div className="restaurant-cards-section">
                {
                    reslistUpd.map((restaurant) => (
                        <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>

    );
}

export default Body;