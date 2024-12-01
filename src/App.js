import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import UserContext from "./utils.js/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils.js/appStore";
import Footer from "./components/Footer";


const Applayout = () => {

    const [userName, setUserName] = useState();
    
    useEffect(()=>
        {
            const data = {
                name : "Nishant",
            };
            setUserName(data.name)
        }
    ,[]);


    return (
        <Provider store={appStore}>
            <UserContext.Provider value ={{loggedInUser: userName, setUserName}}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className="flex-grow">
                    <Outlet />
                    </div>
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout />,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/restaurants/:resId",
                element : <Restaurantmenu/>
            }
        ],
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);