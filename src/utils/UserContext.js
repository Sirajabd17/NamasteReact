import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Siraj khan",
    email: "dummy@gamil.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
