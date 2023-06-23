import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestrauntCard=({name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    user,
   })=>{
   //const {user}=useContext(UserContext);
    return (
 <div className="w-[200px] p-2 m-2 shadow-lg bg-blue-100">
    <img src={IMG_CDN_URL+cloudinaryImageId}></img>
    <h2 className="font-bold text-xl tag_line ">{name}</h2>
    <h3 className="tag_line">{cuisines.join(" , ")}</h3>
    <h4 className="tag_line">{lastMileTravelString}</h4>
    <h4 className="nav_header">{user.name}-{user.email}</h4>
 </div>
    );
 };
 export default RestrauntCard;