import { useState } from "react";
import About from "./About";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   //isvisible control visible or not

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl text-blue-700">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && (
        <p className="text-green-600 text-base font-bold">{description}</p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  //setvisible control what is visible
  //isvisible control visible or not
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold text-red-500">Instamart</h1>
      <Section
        title={"About InstaMart"}
        description={
          "From the accessibility perspective, it could be accessed in any window or tab open on the browser for a website. But if we talk about it, since session storage is tied to the particular session and each tab has its session, data is only available in the current tab in which we’ve set the session storage data. Lastly, cookies are somewhat similar to local storage as they are accessible from any window or tab. It could also be accessed on the server. Whenever we request the back-end server, all the cookies are also sent along. So they are also used for tasks related to authentication."
        }
        isVisible={visibleSection == "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Team InstaMart"}
        description={
          "From the accessibility perspective, it could be accessed in any window or tab open on the browser for a website. But if we talk about it, since session storage is tied to the particular session and each tab has its session, data is only available in the current tab in which we’ve set the session storage data. Lastly, cookies are somewhat similar to local storage as they are accessible from any window or tab. It could also be accessed on the server. Whenever we request the back-end server, all the cookies are also sent along. So they are also used for tasks related to authentication."
        }
        isVisible={visibleSection == "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      <Section
        title={"Career InstaMart"}
        description={
          "From the accessibility perspective, it could be accessed in any window or tab open on the browser for a website. But if we talk about it, since session storage is tied to the particular session and each tab has its session, data is only available in the current tab in which we’ve set the session storage data. Lastly, cookies are somewhat similar to local storage as they are accessible from any window or tab. It could also be accessed on the server. Whenever we request the back-end server, all the cookies are also sent along. So they are also used for tasks related to authentication."
        }
        isVisible={visibleSection == "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};
export default Instamart;
