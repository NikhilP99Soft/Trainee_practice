import React, { useCallback } from "react";
import { useState } from "react";
import TodoComponent from "./TodoComponent";

function ComponentOne() {
  const [count, setCount] = useState(0);
  const [Todo, setTodo] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  // const addTodo = (t) => {
  //   setTodo((t) => [...t, "New Todo"]);
  // };

  //useCallback

  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "NewTodo"]);
  }, [Todo]);

  return (
    <>
      <TodoComponent Todo={Todo} addTodo={addTodo} />

      <hr />
      <h3>count : {count}</h3>
      <br />
      <button onClick={increment}>++</button>
    </>
  );
}

export default ComponentOne;
