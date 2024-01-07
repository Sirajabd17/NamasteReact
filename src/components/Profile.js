import { useEffect, useState } from "react";

const Profile2 = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1> functional component</h1>
      <h3> name:{props.name}</h3>
      <h2> count:{count}</h2>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        count
      </button>
    </div>
  );
};
export default Profile2;
