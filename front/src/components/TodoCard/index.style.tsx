import styled from "styled-components";

export const TodoCardBox = styled.div`
  width: 800px;
  height: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const TextBox = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid orange;
`;
export const TodoCardText = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const UpdateButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: limegreen;
  border: none;
`;
export const DeleteButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: firebrick;
  border: none;
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoCheckBox = styled.input``;
