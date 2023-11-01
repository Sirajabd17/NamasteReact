// import { restrauntList } from "../components/contants";
import RestrauntCart from "./RestrauntCart";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setfilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9358189&lng=77.6178125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restorantArray =
      json.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants;

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

  //conditional rendering
  //If restraunt is empty =>shimmer ui
  //if restraunt has data =>actual data UI

  // not render component (early return)
  if (!allRestaurants) return <h1> heolo</h1>;
  if (filterRestaurants?.length === 0) {
    return <h1>No REstraunt Match your FIlter !!</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state -restaurants
            setfilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="reatraunt-list">
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
