import React, { useState } from "react";
import {
  TodoEditForm,
  EditInput,
  InputBox,
  EditText,
  ConfirmButton,
} from "./index.style";
import { createTodo } from "../../utils/TodoApi";

interface EditData {
  todo: string;
}

interface TodoEditProps {
  mode: string;
  height: string;
  todosListUpdate: () => void;
}

function TodoEdit({ mode, height, todosListUpdate }: TodoEditProps) {
  const [todoData, setTodoData] = useState<EditData>({
    todo: "",
  });
  const editDataOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData((cur): EditData => {
      const newData = { ...cur };
      newData[e.target.name as keyof EditData] = e.target.value;
      return newData;
    });
  };

  const todoDataInit = () => {
    setTodoData({ todo: "" });
    todosListUpdate();
  };
  return (
    <>
      <TodoEditForm
        onSubmit={createTodo({ todoData, todoDataInit })}
        height={height}
      >
        <InputBox>
          <EditText>할 일</EditText>
          <EditInput
            type="text"
            name="todo"
            value={todoData.todo}
            onChange={editDataOnChange}
          ></EditInput>
        </InputBox>
        <InputBox>
          <ConfirmButton>확인</ConfirmButton>
        </InputBox>
      </TodoEditForm>
    </>
  );
}

export default TodoEdit;
