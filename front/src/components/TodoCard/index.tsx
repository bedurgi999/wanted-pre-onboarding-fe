import React, { useState } from "react";
import {
  TodoCardBox,
  TodoCardText,
  TextBox,
  ButtonBox,
  UpdateButton,
  DeleteButton,
  TodoCheckBox,
  CheckBoxDiv,
} from "./index.style";
import {
  TodoEditForm,
  EditInput,
  InputBox,
  EditText,
} from "../TodoEdit/index.style";
import {
  updateTodo,
  deleteTodos,
  updateTodoChecked,
} from "../../utils/TodoApi";

interface TodoCardData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  todosListUpdate: () => void;
}

interface NewTodo {
  todo: string;
  isCompleted: boolean;
}

function TodoCard({
  id,
  todo,
  isCompleted,
  userId,
  todosListUpdate,
}: TodoCardData) {
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [todoData, setTodoData] = useState<NewTodo>({
    todo: "",
    isCompleted: isCompleted,
  });

  const handleCheck = () => {
    setTodoData((cur): NewTodo => {
      const newData = { ...cur };
      newData["isCompleted"] = !newData["isCompleted"];
      return newData;
    });
  };

  const todoDataInit = () => {
    setTodoData({ todo: "", isCompleted: isCompleted });
    setEditOpen(false);
    todosListUpdate();
  };

  const updateTodoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData((cur): NewTodo => {
      const newData = { ...cur };
      newData["todo"] = e.target.value;
      return newData;
    });
  };
  const handleEdit = () => {
    setEditOpen((cur) => !cur);
  };

  const handleDelete = async () => {
    await deleteTodos(id);
    todosListUpdate();
  };

  return (
    <TodoCardBox>
      {editOpen ? (
        <TodoEditForm
          height={"110px"}
          style={{
            display: "flex",
            width: "700px",
            justifyContent: "space-around",
          }}
          onSubmit={updateTodo({ id, todoData, todoDataInit })}
        >
          <InputBox>
            <EditText>할 일</EditText>
            <EditInput
              type="text"
              name="todo"
              value={todoData.todo}
              onChange={updateTodoOnChange}
            ></EditInput>
          </InputBox>
          <CheckBoxDiv>
            <TodoCheckBox
              type="checkbox"
              name="isCompleted"
              defaultChecked={todoData.isCompleted}
              onClick={handleCheck}
            ></TodoCheckBox>
            <EditText>완료</EditText>
          </CheckBoxDiv>
          <ButtonBox>
            <UpdateButton type="submit">확인</UpdateButton>
            <DeleteButton type="button" onClick={handleEdit}>
              취소
            </DeleteButton>
          </ButtonBox>
        </TodoEditForm>
      ) : (
        <>
          <TextBox>
            <TodoCardText>할 일 : {todo}</TodoCardText>
          </TextBox>
          <TodoCheckBox
            type="checkbox"
            defaultChecked={todoData.isCompleted}
            onClick={updateTodoChecked({
              id,
              todo,
              isCompleted,
              todosListUpdate,
            })}
          ></TodoCheckBox>
          완료
          <ButtonBox>
            <UpdateButton onClick={handleEdit}>수정</UpdateButton>
            <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
          </ButtonBox>
        </>
      )}
    </TodoCardBox>
  );
}

export default TodoCard;
