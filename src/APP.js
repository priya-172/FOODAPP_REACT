import React , {lazy,Suspense, useState} from "react";
//import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./contants";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
//import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart"
// import {Title} from "./components/Header" //Name import
//JSX=>React.createElement(bts)=>Object=>HTML(DOM)
/**
 Header
            -logo
            -Nav item
            -cart
         Body
            -search bar
            -Restaurant List
            -Restaurant card
               -image
               -name
               -rating
               -cusines
         FOOTER
            -links
            -copy write
         */
//DYNAMIC IMPORT
const Instamart=lazy(()=> import("./components/Instamart"));
const AppLayout=()=>{
   const [user,setUser]=useState({
      name:"Priya pramanick",
      email:"abc@gmail.com",
   });
   return(
      <Provider store={store}>
   <UserContext.Provider value={{
      user: user,
      setUser:setUser,
   }}>
      <Header/> 
      <Outlet/>
      <Footer/>
   </UserContext.Provider>
   </Provider>
   );
};
const appRouter = createBrowserRouter([
   {
   path: "/",
   element:<AppLayout/>,
   errorElement:<Error/>,
   children: [
      {
         path: "/",
         element:<Body user={{ 
         name:"Priya Pramanick",
         email:"abc@gmail.com",}}/>,
         } ,
      {
         path: "/about",
         element:<About/>,
         children:[
            {
             path : "profile", 
             element:<Profile/>, 
            }
         ]
         } ,
         {
            path: "/contact",
            element:<Contact/>,
            } ,
            {
               path:"/restaurant/:id",
               element:< RestaurantMenu/>,
            },
            {
               path:"/instamart",
               element:<Suspense fallback={<Shimmer/>}>
                  < Instamart/>
                  </Suspense>,
            },
            {
               path:"/cart",
               element:<Cart/>,
            }
           
   ],
   },
   ]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// const pizzaHut={
//    name:"Pizza Hut",
//    image:"https://b.zmtcdn.com/data/pictures/chains/7/20407/1c3df801686d053090b4cad25099a036.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//    cusines:["pizza","Americano"],
//    rating:"4.1"
// }
// const config=[
//    //    {
//    //       type:"carousel",
//    //       cards:[
//    //        {
//    //          offerName:"50% off"
//    //        } ,
//    //        {
//    //          offerName:"No Delivery charges"
//    //        } 
//    //       ]
//    //    }
//    // ]
// AppLayout
//    (user)
//     -<Body user={user}/>
//       -RestaurantContainer user=>
//          -RestaurantCard user={user}
//             -<h4>{user}</h4>
// PROPS DRILING