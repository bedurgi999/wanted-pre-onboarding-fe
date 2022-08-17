import React, { useState, useEffect } from "react";
import TodoCard from "../TodoCard";
import { TodoListBox } from "./index.style";

type Todo = { id: number; todo: string; isCompleted: boolean; userId: number };

interface Todos {
  todos: Todo[];
  todosListUpdate: () => void;
}

function TodoList({ todos, todosListUpdate }: Todos) {
  return (
    <TodoListBox>
      {todos.length !== 0 &&
        todos.map((todo, i) => (
          <TodoCard
            key={i}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            userId={todo.userId}
            todosListUpdate={todosListUpdate}
          ></TodoCard>
        ))}
    </TodoListBox>
  );
}

export default TodoList;
