import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestrauntCart = (props) => {
  //console.log(props);
  const navroute = useNavigate();
  const getId = () => {
    console.log(props.id);
    navroute("/restaurant/" + props.id);
  };
  const { user } = useContext(UserContext);

  return (
    <div
      className="w-56 p-3 m-4 shadow-xl  bg-yellow-200 rounded-md "
      onClick={getId}
    >
      <img src={props.image} />
      <h2 className="font-bold text-lg"> {props.name}</h2>
      <h2 className="font-bold text-base"> {props.locality}</h2>
      <h3 className="text-lg">{props.cusines.join(",")}</h3>
      <h4>{props.area}</h4>
      <h5 className="font-bold">
        {user.name} -{user.email}
      </h5>
    </div>
  );
};
export default RestrauntCart;
