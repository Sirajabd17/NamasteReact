import HeadingComponent from "../Header";
import { render } from "@testing-library/react";

test("logo should load on rendering header", () => {
  //load header
  const header = render(<HeadingComponent />);
  //check if logo is loaded
});
