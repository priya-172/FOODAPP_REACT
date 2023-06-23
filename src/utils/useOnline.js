import { useEffect, useState } from "react";

const useOnline=()=>{
    //whenever we are offline or online it should change the state

    const [isOnline,setIsOnline]=useState(true);
//it will be just once as we have empty dependency array
    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);  
        }
        const handleOffline=()=>{
            setIsOnline(false); 
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
        return ()=>{
          window.removeEventListener("online",handleOnline); 
          window.removeEventListener("online",handleOffline); 
        };
    },[]);

     return isOnline;//true or false
}
export default useOnline;