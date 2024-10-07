import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
// import reslist from "../utils.js/mockData";

const Body = () => {

    const [reslistUpd, setreslist] = useState([]);

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
        return <h1>Loading...</h1>
    }

    return (
        <div className="body">
            <div className = "upperBody">

            <div className="search">
                <h4>Search</h4>
                <h4>🔍</h4>
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