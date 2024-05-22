import React, { useMemo, useState } from "react";

const Comp1 = () => {
  let [count, setCount] = useState(0);
  let [todos, setTodos] = useState([]);
  let calculation = expensiveCalculation(count);

  //   let calculation = useMemo((count) => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((count = count + 1));
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>AddCount</button>
      <hr />
      <h2>ExpensiveCalculation:{calculation}</h2>

      <hr />
      <h1>My Todos</h1>
      {todos.map((todo, index) => {
        return (
          <>
            <p key={index}>{todo}</p>
          </>
        );
      })}
      <button onClick={addTodo}>addTodo</button>
    </>
  );
};

const expensiveCalculation = (num) => {
  console.log("...calculating");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

export default Comp1;
