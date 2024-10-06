import Restaurantcard from "./Restaurantcard";
import { useState } from "react";
import reslist from "../utils.js/mockData";

const Body = () => {

    const [reslistUpd, setreslist] = useState(reslist);

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