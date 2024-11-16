import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_API } from "../utils.js/constants";

const Restaurantmenu = () => {

    //useState applied
    const [resInfo, setResInfo] = useState(null);

    //useParams applied
    const {resId} = useParams();

    //useEffect applied
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(RES_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }    


    //return statements

    if(resInfo==null) return <Shimmer/>;
    const {name,costForTwoMessage,cuisines,avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => (<li key={item.card.info.id}>
                    {item.card.info.name} - 
                    {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>))}
            </ul>
        </div>
    )
}
export default Restaurantmenu;