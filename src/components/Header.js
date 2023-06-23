//we can export directly using export keyword

import { useEffect, useState ,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const authenticateUser = ()=>{

   return true;
}
//SPA-single page application


//use import {Title} from "./components/Header" 
const Title=()=>(
    <a href="/">
    <img 
    className="h-28 p-2" alt="logo" 
    src="https://pbs.twimg.com/media/C66K7ZdVsAEW8g8.jpg" class="h-16"></img>
    </a>
 );
 const Header=()=>{
   const[isLoggedIn,setLoggedIn]=useState(true);
   const isOnline=useOnline();
   const {user}=useContext(UserContext);
   const cartItems = useSelector(store=>store.cart.items);
   return(
    <div className="flex justify-between bg-blue-50 shadow-lg sm:bg-blue-50">
       <Title></Title>
       <div className="nav-items">
          <ul className="flex py-3">
          <li className="px-2">
          <Link to="/">  <li className="nav_header">Home</li> </Link>
          </li >
          <Link to="/about"> 
          <li className="nav_header">About us</li> 
          </Link>
          <Link to="/contact">  
          <li className="nav_header">Contact</li>
          </Link> 
          <Link to="/instamart"> 
         <li className="nav_header">Instamart</li>
         </Link>
         <Link to="/cart"> 
         <li className="nav_header" data-testid="cart">Cart-{cartItems.length}</li>
         </Link>
          </ul>
       </div>
       <h1 data-testid="online-status"className="nav_header">{isOnline?"online":"offline"}</h1>
       <span className="nav_header">{user.name}</span>
       {isLoggedIn ? (<button className="nav_header" onClick={()=>setLoggedIn(false)}>LOGOUT</button>):
       (<button className="nav_header" onClick={()=>setLoggedIn(true)}>LOGIN</button>)
       }
    </div>
    );
 };
 //we have to export it
 export default Header;//we can  export default onr thing