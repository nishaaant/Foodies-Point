import { ITEM_IMG_URL } from "../utils.js/constants";
const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            {items.map((item)=>(
            <div className="p-2 mx-auto my-2 w-11/12 bg-slate-50 border-2 border-black">
                <div key = {item.card.info.id} className="mb-4 text-left flex justify-between">
                <div className="w-10/12">
                <span className="font-bold">
                {item.card.info.name}
                </span>
                <span>- ₹{item.card.info.price/100 || item.card.info.defaultPrice/100 }
                </span>
                <p className="text-sm my-4">{item.card.info.description}</p>
                </div>
                <div className="w-2/12">
                <button className="bg-[#424242] rounded-md border-2 border-[#424242] text-slate-200 hover:bg-slate-200 hover:text-[#424242] p-2 absolute">
                    Add+
                </button>
                    <img src = {ITEM_IMG_URL +item.card.info.imageId}
                    className=""></img>
                </div>
                </div>
            </div>
                ))}
        </div>
    )
}
export default ItemList;