import React from "react";

//if we dont bind this using the inbuild method bind() then it will shoe this as undefined;
//we have 3 methods
//  1)binding event handler in render method,
//  2)using arrow function,
//  3)using constructor method.

class BindingEvent extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "welcome",
    };
    //binding event handler in constructor
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Farewell",
    });
    // console.log();
  }

  //using arrow function
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Farewell",
  //     });
  //   };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        {/* in render method  */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </>
    );
  }
}

export default BindingEvent;
