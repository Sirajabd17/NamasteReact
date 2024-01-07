import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./contants";
import useRestaurants from "../utils/useRestaurants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  // useparam is usefor how to read dynamic url param
  const { resid } = useParams();

  // console.log(restorentMenuDetails);
  const [restaurant, setRestaurant] = useState({});
  const [restorentMenuDetails, setRestorentMenuDetails] = useState([]);

  const dispatch = useDispatch();

  const addFoodItem = (name) => {
    dispatch(addItem(name));
  };
  // const {id}=params;
  //console.log(params);
  //const [restorentMenuDetails, setRestorentMenuDetails] = useState({});

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9339813&lng=77.62128249999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
      // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9339813&lng=77.62128249999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
      // "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=50467"
    );
    const json = await data.json();
    console.log(json);

    const restObject =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (ele) => {
          return ele.card.card.itemCards;
        }
      );
    setRestorentMenuDetails(restObject);
    console.log(restObject);

    const restmenu = restObject[0].card?.card?.itemCards[0].card?.info;
    console.log(restmenu);

    setRestaurant(restmenu);
    // setRestorentMenuDetails(json.data.cards[0].card.card.info);
  }

  return (
    <>
      {restorentMenuDetails.map((ele) => {
        return (
          <div>
            {/* <h1> Restraunt Ids:{resid}</h1> */}
            {/* <h2>Namaste dynamic routing</h2> */}
            <h2 className="text-lg text-red-950 font-bold">
              {ele.card?.card?.title}
            </h2>
            <h3 className="text-lg text-black-950 font-bold">
              {ele.card?.card?.itemCards.length}
            </h3>
            {/* <img src={IMG_CDN_URL + restaurant.imageId} /> */}

            {ele.card?.card?.itemCards.map((menu) => {
              return (
                <div>
                  <span className="text-lg font-semibold  rounded-md border-2 border-black p-2 m-2">
                    {menu.card.info.name}
                  </span>
                  <button
                    className="p-2 m-2 text-white bg-blue-500 rounded-lg"
                    onClick={() => addFoodItem(menu?.card?.info)}
                  >
                    Add Item
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
//  <div>
//       <h1> Restraunt Ids:{resid}</h1>
//       <h2>Namaste dynamic routing</h2>
//       <h2>{restaurant.name}</h2>
//       <img src={IMG_CDN_URL + restaurant.imageId} />
//     </div>
export default RestaurantMenu;

// const restdata=restObject.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((ele)=>{
//   return ele.card.card.itemCards

//  })

// console.log(restdata)
