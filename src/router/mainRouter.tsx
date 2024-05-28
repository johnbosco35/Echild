import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../pages/home/HomeScreen";
import Register from "../pages/auth/Register";
import LogIn from "../pages/auth/LogIn";


export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<LogIn/>
    }

])