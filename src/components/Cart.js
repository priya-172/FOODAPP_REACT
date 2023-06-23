// import { useSelector,useDispatch } from "react-redux";
// import FoodItem from "./FoodItem";
// import { clearCart } from "../utils/cartSlice";
// const Cart= ()=>{
//     const cartItems = useSelector(store => store.cart.items);
//     const dispatch=useDispatch();
//     const handleClearCart=()=>{
//        // dispatch(clearCart());
//         dispatch(clearCart());
//     }
//     return (
//     <div>
//         <h1 className="text-bold text-3xl">cart Items- {cartItems.length}</h1>
//         <button className="btn p-2" onClick={()=>handleClearCart()}>Clear Cart</button>
//         <div className="flex">
//         {cartItems.map(item=>(
//             <FoodItem key={item.id} {...item}/>
//         ))}
//        <FoodItem {...cartItems[0]}/>
//     </div>
//     </div>
//     );

    // };
import { useSelector,useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
const cartItems=useSelector(store=>store.cart.items);
const dispatch=useDispatch();
const handleClearCart=()=>{
dispatch(clearCart())
}

return (
<div>
<h1 className="text-2xl font-bold ">
Cart-items
<div className="flex">
{
cartItems.map((item)=><FoodItem key={item.id}
{...item}/>)
}
<div>
<button className="btn p-2"
onClick={()=>{handleClearCart()}}> Clear Cart</button>
</div>
</div>
</h1>
</div>
)
}
 export default Cart;