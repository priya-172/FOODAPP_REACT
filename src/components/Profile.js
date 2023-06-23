import { useEffect, useState } from "react";
const ProfileFunctionalComponent=(props)=>{
const [count,setCount]=useState(0);
  useEffect(()=>{
    // const timer=setInterval(()=>{
    //     console.log("namste darsakho");
    // },1000);
    console.log("useeffect");
    return()=>{
        //clearInterval(timer);
        console.log("useeffect return");
    };
  },[])  ;
  console.log("render");
    return (
        <div>
            <h2>profile component</h2>
            <h3>Name:{props.name}</h3>
            <h3>count:{count}</h3>
            <button onClick={()=>{
            setCount(1);
           
        }
   }>
         Count
        </button>
        </div>
    );
};
export default ProfileFunctionalComponent;