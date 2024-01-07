//  const useRestaurants=(resId)=>{
//     const[restaurant,setRestaurant]=useState(null);

//    // const [restaurant, setRestaurant] = useState({});
//     //const [restorentMenuDetails, setRestorentMenuDetails] = useState([]);
    
//     // const {id}=params;
//     //console.log(params);
//     //const [restorentMenuDetails, setRestorentMenuDetails] = useState({});
  
//     useEffect(() => {
//       getRestaurants();
//     }, []);
  
//     async function getRestaurants() {
//       const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9339813&lng=77.62128249999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
//         // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9339813&lng=77.62128249999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
//         // "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=50467"
//       );
//       const json = await data.json();
//       console.log(json);
  
//       const restObject =
//         json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
//           (ele) => {
//             return ele.card.card.itemCards;
//           }
//         );
//       setRestorentMenuDetails(restObject);
//       console.log(restObject);
  
//       const restmenu = restObject[0].card?.card?.itemCards[0].card?.info;
//       console.log(restmenu);
  
//       setRestaurant(restmenu);
//       // setRestorentMenuDetails(json.data.cards[0].card.card.info);
//     }
  
    

//  };

//  export default useRestaurants;