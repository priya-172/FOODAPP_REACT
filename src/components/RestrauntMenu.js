import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu=()=>{
    //how to read a dynamic URL params
    const {id}=useParams();
   
const restaurant = useRestaurant(id);
const dispatch = useDispatch();
// const handleAddItem=()=>{
//   dispatch(addItem("grapes"));  
// };
const addFoodItem =(item)=>{
 dispatch(addItem(item?.card?.info));
};
    return (!restaurant)?<Shimmer/>:(
      <div className="flex p-2 m-2">
        <div>
        <h1 className="tag_line">Restaurant id: {id}</h1>
        {restaurant?.cards && restaurant.cards.length > 0 && (
      <>
        <h2 className="tag_line">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img src ={  IMG_CDN_URL +restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
        <h3 className="tag_line">{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h4 className="tag_line">{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h4>
        <h5 className="tag_line">{restaurant?.cards[0]?.card?.card?.info?.costForTwo}</h5>
      </>
    )}
    </div>
    {/* <div>
      <button className="btn p-0" onClick={()=>handleAddItem()}>Add_item</button>
    </div> */}
    <div className="p-5">
 <h1 className="tag_line text-2xl text-blue">MENU</h1>
 <ul className="tag_line">
 {restaurant?.cards && restaurant.cards.length > 0 && (
      <>
      {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards??[])?.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}- <button className="rounded p-0 bg-slate-500 text-white" onClick={()=>addFoodItem(item)}> Add</button></li>)}
      </>
    )}
 </ul>
    </div>
      </div> 
    );
};
export default RestaurantMenu;