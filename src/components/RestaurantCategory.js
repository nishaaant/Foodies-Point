import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false)
    const handleClick = () =>{
        setShowItems(!showItems)
    }

    console.log(data)
    return (<div className="mx-auto my-6 w-8/12">
    <div className="p-2 h-12 shadow-lg flex justify-between cursor-pointer"
    onClick={handleClick}>
        <h1 className="font-bold">{data.title}({data.itemCards.length})</h1>
        <h1>🔻</h1>
    </div>
    
    {showItems && <ItemList items ={data.itemCards}/>}
    </div>)
}
export default RestaurantCategory;