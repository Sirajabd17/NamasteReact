import { Outlet } from "react-router-dom";
import Profile1 from "./Profileclass";
import Profile2 from "./profile";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("parent-constructure");
  }
  componentDidMount() {
    //best place to call api
    // console.log("parent-componentDidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="">
        <h1> About Us Page</h1>

        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>
          This is the react Namaste React Live course chapter 07-finding the
          path
        </p>
        <Profile2 />
        {/* <Profile1 name={"second child"} /> */}
      </div>
    );
  }
}

export default About;
