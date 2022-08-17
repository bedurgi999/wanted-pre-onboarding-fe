import axios from "axios";

type tododata = { todo: string; isCompleted?: boolean };

interface Todo {
  todoData: tododata;
  todoDataInit: () => void;
}

interface UpdateTodo {
  id: number;
  todoData: tododata;
  todoDataInit: () => void;
}

interface UpdateTodoChecked {
  id: number;
  todo: string;
  isCompleted: boolean;
  todosListUpdate: () => void;
}

export const createTodo = ({ todoData, todoDataInit }: Todo) => {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
      todoData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      }
    );
    todoDataInit();
  };
};

export const updateTodo = ({ id, todoData, todoDataInit }: UpdateTodo) => {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.put(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/" +
        id,
      todoData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      }
    );
    todoDataInit();
    console.log(res);
  };
};

export const getTodos = () => {
  return axios.get(
    "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
      },
    }
  );
};

export const deleteTodos = (id: number) => {
  return axios.delete(
    "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/" +
      id,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
      },
    }
  );
};

export const updateTodoChecked = ({
  id,
  todo,
  isCompleted,
  todosListUpdate,
}: UpdateTodoChecked) => {
  return async () => {
    const data = { todo, isCompleted: !isCompleted };
    console.log(data);
    const res = await axios.put(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/" +
        id,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      }
    );
    todosListUpdate();
    console.log(res);
  };
};
