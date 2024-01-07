import { useState, useContext } from "react";
import logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useoffline";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

// const loggedInuser = () => {
//   //api call to check authentication
//   return true;
// };

const Title = () => (
  <a href="/">
    <img className="h-24 p-2 " alt="logo" src={logo} />
  </a>
);

const HeadingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2 text-xl font-bold	font-serif  hover:text-blue-700 ">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="px-2  text-xl font-bold	font-serif  hover:text-blue-700">
              About
            </li>
          </Link>
          <Link to="/Contact">
            <li className="px-2  text-xl font-bold	font-serif  hover:text-blue-700 ">
              Contact
            </li>
          </Link>

          <Link to="/Instamart">
            <li className="px-2  text-xl font-bold	font-serif hover:text-blue-700">
              Instamart
            </li>
          </Link>
          <Link to="/cart">
            <li className="px-2  text-xl font-bold	font-serif hover:text-blue-700">
              Cart-{cartItems.length} item
            </li>
          </Link>
        </ul>
      </div>
      <h2>{isOnline ? "✅" : "🔴"}</h2>
      <span className="p-10 font-bold text-red-900"> {user.name}</span>

      {
        // js expression & not statement  make statement a expression
        // ((a=10),console.log(a))

        // toggle for login  and logout button
        isLoggedIn ? (
          <button
            className="m-8 p-1  rounded-md text-xl font-bold bg-blue-500 text-white"
            onClick={() => setIsLoggedIn(false)}
          >
            LogOut
          </button>
        ) : (
          <button
            className="m-8 px-2 text-xl rounded-md font-bold  bg-blue-500 text-white"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )
      }
    </div>
  );
};
export default HeadingComponent;
