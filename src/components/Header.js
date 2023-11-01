import { useState } from "react";
// const loggedInuser = () => {
//   //api call to check authentication
//   return true;
// };

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/HipIhegQlrlSzBGZSUtOPYyA2VGbo2qyXmIdYNkodW-HVF01t5CX-MrXoDKnf9R5UErOmCbnbA=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const HeadingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        // js expression & not statement  make statement a expression
        // ((a=10),console.log(a))

        // toggle for login  and logout button
        isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
    </div>
  );
};
export default HeadingComponent;
