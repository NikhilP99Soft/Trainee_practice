import React, { useState } from "react";

// An input form element whose value is controlled by React in this way is called a “controlled component”

const ControlledComp = () => {
  const [name, setName] = useState("Nikhil");
  const handleClick = (e) => {
    e.preventDefault(), console.log("Name-", name);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ControlledComp;
