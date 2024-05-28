import React from "react";
import ConditionalRender from "./ConditionalRender";
import UseTernary from "./usingternary/UseTernary";

const Football = () => {
  let goal = true;
  return (
    <div>
      <ConditionalRender goal={goal} />
      <UseTernary goal={goal} />
    </div>
  );
};

export default Football;
