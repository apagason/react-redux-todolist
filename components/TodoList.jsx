import React from "react";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

function TodoList() {
  return (
    <header>
      <h1>Task List 2022</h1>
      <TodoHeader />
      <br />
      <br />
      <br />
      <TodoBody />
    </header>
  );
}

export default TodoList;
