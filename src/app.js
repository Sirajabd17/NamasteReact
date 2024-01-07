import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Contact from "./components/Contact";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestraurantMenu";
import Profile from "./components/profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import { UseSelector } from "react-redux/es/hooks/useSelector";

//chunking
//code splitting
//dynamic bundling'
//lazy loading
//on demand loading
//dynamic import

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

//upon on demand loading=> upon => suspend loading

{
  /* 
const Heading1=()=>{
  return (
    <div>
      
      <h1> Namaste react functional component</h1>
      <h2> this is h2 tag</h2>
    </div>
  );
};
  
const test =(
  <h1 id='title' key="h2">
    hello react
  </h1>
);


var xyz=100;
const Heading2=()=>(
  <div>
    {test}
    <Heading1/>
    {Heading1()}
    {console.log(xyz)}
   { " we can write any javascript code here!"}
    <h1>
      Namaste react functionl component 
    </h1>
    <h2>
      First we import and export to render component
    </h2>
  </div>
)
**/
}
/**
         Header 
            -logo
            -nav items (right side)
            -cart
          Body
            -searbar
            -restraunt list
            -restaurant cart
               -image 
               -name
              -rating
               -cusines 
           footer
               -links
               -Copyrights     
         */

// const burgerking={
//   name:"Burger King",
//   image:"https://tb-static.uber.com/prod/image-proc/processed_images/64d5b6cf0e05b04b99ff8ea0faee804f/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
//   cusines:["Burger","American"],
//   rating:"4.2",
// }

const Applayout = () => {
  const [user, setUser] = useState({
    name: "Golu",
    email: "Namberdarfc@gamil.com",
  });

  return (
    //overriding value user object from usercontext component by using usercontext.provider
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <HeadingComponent />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
        children: [
          {
            path: "profile", //localhost:123/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
