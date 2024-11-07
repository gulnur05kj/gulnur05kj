import React from "react";
import { TodoItemRequest } from "./TodoItemRequest";

export const TodoListRequest = ({ tests = [] }) => {
  console.log(tests);

  return (
    <ul>
      {tests?.map((item) => (
        <TodoItemRequest key={item.id} {...item} />
      ))}
    </ul>
  );
};
