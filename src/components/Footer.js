import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className=" p-10 m-5 ">
      This site is Developed by{" "}
      <span className="text-red-950 font-bold">
        {user.name}-{user.email}
      </span>
    </h4>
  );
};
export default Footer;
