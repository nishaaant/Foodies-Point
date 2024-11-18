import { IMG_URL } from "../utils.js/constants";

const Restaurantcard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;

    return (
        <div className = "p-2 mx-6 my-4 w-[270px] h-[420px] rounded-md border-[#424242] shadow-xl bg-[#E9EFEC]  hover:border-2">
            <img className = "h-52 w-full rounded-lg" src = {IMG_URL+cloudinaryImageId} />
            <h3 className = "res-name my-2 font-black text-xl">{name}</h3>
            <h4 className = "ratings">{avgRating}⭐</h4>
            <h5 className = "tags">{cuisines.join(", ")}</h5>
            <h5 className = "areaname">{areaName}</h5>
        </div>
    )
}
export default Restaurantcard;