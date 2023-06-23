import { IMG_CDN_URL } from "../contants";
import { FETCH_MENU_URL } from "../contants";

const FoodItem=({name,
    description,
    cloudinaryImageId,
    price,
   })=>{

    return (
 <div className="w-[200px] p-2 m-2 shadow-lg bg-blue-100">
    <img src={IMG_CDN_URL +cloudinaryImageId}></img>
    <h2 className="font-bold text-xl tag_line ">{name}</h2>
    <h3 className="tag_line">{description}</h3>
    <h4 className="tag_line">Rupees: {price/100}</h4>
 </div>
    );
 };
 console.log(FoodItem);
 export default FoodItem;