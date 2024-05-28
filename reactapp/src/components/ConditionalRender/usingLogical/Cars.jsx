import React from "react";
import UseLogical from "./UseLogical";

const Cars = () => {
  let vechiles = ["Audi", "Mercedes", "Volvo", "Mahindra"];
  return (
    <div>
      <UseLogical cars={vechiles} />
    </div>
  );
};

export default Cars;
