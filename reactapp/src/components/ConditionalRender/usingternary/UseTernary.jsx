import React from "react";
// import Goal from "../ConditionalRender";
// import MissedGoal from "../ConditionalRender";

const UseTernary = ({ goal }) => {
  //   let goal = props.goal;
  return goal ? <Goal /> : <MissedGoal />;
};

function Goal() {
  return (
    <>
      <h1>Goal !</h1>
    </>
  );
}

function MissedGoal() {
  return (
    <>
      <h1>Missed Goal !</h1>
    </>
  );
}

export default UseTernary;
