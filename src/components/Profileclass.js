import React from "react";
class Profile1 extends React.Component {
  constructor(props) {
    super(props);
    //create state here
    this.state = {
      count: 0,
    };
    // console.log("child -Constructure" + this.props.name);
  }

  componentDidMount() {
    //api calss
    //  console.log("child-componentDidMount" + this.props.name);
  }
  render() {
    const { count } = this.state;
    // console.log("child-render" + this.props.name);
    return (
      <div>
        <h1>Profile classes Component</h1>
        <h3>name:{this.props.name}</h3>
        <h2> count:{count}</h2>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Setcount
        </button>
      </div>
    );
  }
}

export default Profile1;
