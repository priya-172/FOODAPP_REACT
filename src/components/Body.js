//import { useState } from "react";
import { restaurantList } from "../contants";
import RestrauntCard from "./RestrauntCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { FETCH_MENU_URL } from "../contants";
//const {user,setUser}=useContext(UserContext);

const Body= () =>{
   const[allrestaurants,setAllRestaurants]=useState([]);
   const[filteredrestaurants,setfilteredrestaurants]=useState([]);
   //local state variable
   const [searchInput, setSearchInput]=useState("");//to creat state variable
   const {user,setUser}=useContext(UserContext);

useEffect(()=>{
//console.log("call this when dependcies are changed")
getRestaurants();
},[]);

async function getRestaurants(){
   try{
   const data= await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
   );
   const json= await data.json();
   setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);
   } catch(error){
      console.log(error);
   }
}
//if resturant is empty =>shimmer ui
//if resturant has data=> actual data ui

//To check online or not
// const isOnline=useOnline();
// if(!isOnline){
//    return <h1>offline,please check your internet connection!!</h1>;
// }


if(!allrestaurants) return null;
// if(filteredrestaurants?.length===0)
//    return<h1> No Resturant match your Filter!!</h1>;

return allrestaurants?.length===0 ? (
<Shimmer/>
):(
   <>
   <div className="search-container p-5 bg-blue-50 my-3">
      <input
      type="text"
      className="focus:bg-green-200 p-2 m-2"
      placeholder="Search"
      value={searchInput}
      onChange={(e)=>{
        // searchTxt=e.target.value;  
        setSearchInput(e.target.value);
      }}//onChangeInput}
      />
      {/* <h1>{searchClicked}</h1> */}
     <button 
     data-testid="search-btn"
     className="search-btn p-2 m-2 bg-blue-600 hover:bg-blue-200 text-white rounded-full" 
     onClick={()=>{
  const data= filterData(searchInput,allrestaurants);
  setfilteredrestaurants(data);

     }}>search</button>  
     <input value={user.name} onChange={
      e=> setUser({
         ...user,
         name:e.target.value,
      })
     }></input>
       <input value={user.email} onChange={
      e=> setUser({
         ...user,
         email:e.target.value,
      })
     }></input>
     </div> 
 <div className="flex flex-wrap">
 {
      //write Logic
 filteredrestaurants.map((restaurant)=>{
  //if(!restaurant?.cards || restaurant.cards.length < 1 ) return null;
    return(<Link to={"/restaurant/"+restaurant?.data?.id} key={restaurant?.data?.id}>
      <RestrauntCard{...restaurant.data} user={user}/>
      </Link> 
    );
 })}
   </div>
 </>
    );
 };
 export default Body;
 