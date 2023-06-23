 import { createContext } from "react";
 const UserContext= createContext({
  user:{
   name: "Dummy name",
   email: "dummy@gmail.com"  ,
  },
 }); 
UserContext.displayName="userContext";

 export default UserContext;