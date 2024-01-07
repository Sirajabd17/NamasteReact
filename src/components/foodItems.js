import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import RestrauntCart from "./RestrauntCart";
import { IMG_CDN_URL } from "./contants";

const FoodItem = (props) => {
  //console.log(props);
  //   const navroute = useNavigate();
  //   const getId = () => {
  //     console.log(props.id);
  //     navroute("/restaurant/" + props.id);
  //   };
  //  const { user } = useContext(UserContext);

  return (
    <div
      className="w-56 p-3 m-4 shadow-xl  bg-yellow-200 rounded-md "
      //  onClick={getId}
    >
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          props.imageId
        }
      />
      <h2 className="font-bold text-base m-2"> {props.name}</h2>

      <h2 className=" text-sm m-2"> {props.description}</h2>

      <h4 className="font-bold text-lg m-2"> Rupees-{props.price / 100}</h4>
    </div>
  );
};
export default FoodItem;
//  <img src={IMG_CDN_URL + cloudinaryImageId} />
//<img src={ImageId} />;
