import React from "react";
import { memo } from "react";

function TodoComponent({ Todo, addTodo }) {
  console.log(Todo);
  return (
    <>
      <h1>My Todo</h1>

      {Todo.map((todo, index) => {
        return (
          <>
            <p key={index}>{todo}</p>
          </>
        );
      })}
      <button onClick={addTodo}>AddTodo</button>
    </>
  );
}

export default memo(TodoComponent);
