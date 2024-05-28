import React from "react";

const EventOfClick = () => {
  const ClickHandler = () => {
    console.log("clicked Me");
  };
  return (
    <div>
      <button onClick={ClickHandler}>Click Me</button>
    </div>
  );
};

export default EventOfClick;
