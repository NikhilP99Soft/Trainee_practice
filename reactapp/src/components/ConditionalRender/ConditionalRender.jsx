import React from "react";

function MissedGaol() {
  return <h1>Missed Goal</h1>;
}

function Goal() {
  return <h1>Goal</h1>;
}

const ConditionalRender = (props) => {
  let goal = props.goal;
  if (goal) {
    return (
      <>
        <Goal />
      </>
    );
  } else {
    return (
      <>
        <MissedGaol />
      </>
    );
  }
};

export default ConditionalRender;
