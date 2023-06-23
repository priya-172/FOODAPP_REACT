import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
test("logo should load on rendering header",()=>{
   //Load Header
   const header= render(
    <StaticRouter>
   <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>
    );
   console.log(header);
   //check if logo is loaded 
   //const logo = header.getAllByTestId("logo");

});
test("online status should be green",()=>{
    //Load Header
    const header= render(
     <StaticRouter>
    <Provider store={store}>
     <Header/>
     </Provider>
     </StaticRouter>
     );
    console.log(header);
    //check if logo is loaded 
    const onlineStatus= header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("online");
    
 
 });
 test("cart should have 0 item",()=>{
    //Load Header
    const header= render(
     <StaticRouter>
    <Provider store={store}>
     <Header/>
     </Provider>
     </StaticRouter>
     );
    console.log(header);
    //check if logo is loaded 
    const cart= header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0");
    
 
 });