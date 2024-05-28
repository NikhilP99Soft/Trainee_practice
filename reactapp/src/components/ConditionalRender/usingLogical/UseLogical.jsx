import React from "react";

const UseLogical = (props) => {
  let cars = props.cars;
  console.log(cars);
  return (
    <div>
      <h1>Garriage</h1>
      {cars.length > 0 && <h3>you have {cars.length} cars in your garage</h3>}
    </div>
  );
};

export default UseLogical;
