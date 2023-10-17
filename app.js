const heading = React.createElement(
    "h1", //tag
    {
      id: "title",
    },
    "Heading react 1" //content
  );
  
  // <h1 id="title">  Heading 1</h1> same as above code
  
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "heading React 2"
  );
  dfg;
  const container = React.createElement(
    "div", // tag
    {
      id: "container", // attribute
    },
  
    [heading, heading2] // children
  );
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
  