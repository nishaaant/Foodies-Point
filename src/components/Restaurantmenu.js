import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {

    //useParams applied
    const {resId} = useParams();

    //custom Hooks applied
    const resInfo = useRestaurantMenu(resId);

    //return statements
    if(resInfo==null) return <Shimmer/>;
    const {name,costForTwoMessage,cuisines,avgRating} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards)
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories)

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl mx-auto my-4">{name}</h1>
            <h3 className="font-bold">{costForTwoMessage}</h3>
            <h3 className="font-bold">{cuisines.join(", ")}</h3>
            <h3 className="font-bold">{avgRating}⭐</h3>
            {categories.map((category)=> 
                (<RestaurantCategory key={category.card?.card.title} data = {category.card?.card}/>))}
        </div>
    )
}

export default Restaurantmenu;
            // <ul>
            //     {itemCards.map(item => (<li key={item.card.info.id}>
            //         {item.card.info.name} - 
            //         {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>))}
            // </ul>