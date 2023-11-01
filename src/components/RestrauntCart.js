import { IMG_CDN_URL } from "../components/contants";

const RestrauntCart = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} />
      <h2> {props.name}</h2>
      <h3>{props.cusines.join(",")}</h3>
      <h4>{props.area}</h4>
    </div>
  );
};
export default RestrauntCart;
