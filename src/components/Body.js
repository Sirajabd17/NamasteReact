// import { restrauntList } from "../components/contants";
import RestrauntCart from "./RestrauntCart";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filterRestaurants, setfilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9358189&lng=77.6178125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);

    const restorantArray =
      json.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    let array1 = [];

    restorantArray.forEach((ele) => {
      // console.log(ele.info);
      let rest = {
        type: "restaurant",
        data: {},
      };
      rest.data["id"] = ele.info.id;
      rest.data["name"] = ele.info.name;
      rest.data["locality"] = ele.info.locality;
      rest.data["cusines"] = ele.info.cuisines.splice(0, 1); //filterData(ele.info.cuisines);
      rest.data["image"] =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        ele.info.cloudinaryImageId;
      array1.push(rest);
    });
    console.log(array1);
    setAllRestaurants(array1);
    setfilterRestaurants(array1);
    //setRestaurants(json.data.card[5].)
  }
  console.log("render");
  console.log("render2");

  //conditional rendering
  //If restraunt is empty =>shimmer ui
  //if restraunt has data =>actual data UI

  // not render component (early return)
  if (!allRestaurants) return <h1> heolo</h1>;
  // if (filterRestaurants?.length === 0) {
  //   return <h1>No REstraunt Match your FIlter !!</h1>;
  // }

  // const isOnline = useOnline();
  // if (!isOnline) {
  //   return <h1> offline, please check your internet connection</h1>;
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-100 my-5">
        <input
          type="text"
          className="focus:bg-yellow-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2   bg-purple-700 hover:bg-gray-400 text-white rounded-xl"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state -restaurants
            setfilterRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          value={user?.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>

        <input
          value={user?.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-wrap bg-blue-100">
        {filterRestaurants.map((restaurant) => {
          return (
            <RestrauntCart {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
