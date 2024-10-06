import { IMG_URL } from "../utils.js/constants";

const Restaurantcard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;

    return (
        <div className = "card">
            <img className = "restaurant-img" src = {IMG_URL+cloudinaryImageId} />
            <h3 className = "res-name">{name}</h3>
            <h4 className = "ratings">{avgRating}⭐</h4>
            <h5 className = "tags">{cuisines.join(", ")}</h5>
            <h5 className = "areaname">{areaName}</h5>
        </div>
    )
}
export default Restaurantcard;