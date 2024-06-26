import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter , Router, RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const Applayout = ()=>{
    return (
        <div className = "layout">
            <Header/>
            <Outlet/> 
            {/* acts as a tunnel or if-else as per the path given */}
          
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children:[
            {
                path : "/",
                element: <Body/>,
                
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);