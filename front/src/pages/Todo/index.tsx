import React, { useState, useEffect } from "react";
import TodoEdit from "../../components/TodoEdit";
import TodoList from "../../components/TodoList";
import { TodoPage } from "./index.style";
import { getTodos } from "../../utils/TodoApi";

interface Todos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function Todo() {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);

  const todosListUpdate = () => {
    getTodos().then((res) => setTodos(res.data));
  };
  return (
    <TodoPage>
      <TodoEdit
        mode={"add"}
        height="120px"
        todosListUpdate={todosListUpdate}
      ></TodoEdit>
      <TodoList todos={todos} todosListUpdate={todosListUpdate}></TodoList>
    </TodoPage>
  );
}

export default Todo;
