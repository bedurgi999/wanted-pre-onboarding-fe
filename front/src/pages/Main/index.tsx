import React, { useState, useEffect } from "react";
import {
  MainBox,
  InputForm,
  InputBox,
  UserInput,
  InputText,
  LoginButton,
  ValidWord,
  RegisterButton,
} from "./index.style";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

interface Valid {
  idValid: boolean;
  pwValid: boolean;
}

interface MainProps {
  handleToken: () => void;
}

function Login({ handleToken }: MainProps) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [valid, setValid] = useState<Valid>({
    idValid: false,
    pwValid: false,
  });
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((cur): User => {
      const newInfo: User = { ...cur };
      newInfo[e.target.name as keyof User] = e.target.value; // 정석
      return newInfo;
    });
  };
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    sessionStorage.setItem("userToken", res.data.access_token);
    handleToken();
    console.log(sessionStorage.getItem("userToken"));

    navigate("/todo");
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    setUser({
      email: "",
      password: "",
    });
    setValid({
      idValid: false,
      pwValid: false,
    });
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  useEffect((): void => {
    if (user.email !== "") {
      setValid({
        ...valid,
        idValid: user.email.toLowerCase().match(reg) !== null ? true : false,
      });
    } else {
      setValid({
        ...valid,
        idValid: false,
      });
    }
  }, [user.email]);

  useEffect((): void => {
    if (user.password !== "") {
      setValid({
        ...valid,
        pwValid: user.password.length >= 8 ? true : false,
      });
    } else {
      setValid({
        ...valid,
        pwValid: false,
      });
    }
  }, [user.password]);
  console.log(sessionStorage.getItem("userToken"));
  return (
    <MainBox>
      <InputForm onSubmit={login ? handleLogin : handleRegister}>
        <InputBox>
          <InputText>아이디</InputText>
          <UserInput
            type="email"
            placeholder="이메일"
            name="email"
            value={user.email}
            onChange={handleOnChange}
          ></UserInput>
        </InputBox>
        {!valid.idValid && (
          <ValidWord>이메일 형식의 아이디가 아닙니다.</ValidWord>
        )}
        <InputBox>
          <InputText>비밀번호</InputText>
          <UserInput
            type="password"
            placeholder="비밀번호"
            name="password"
            value={user.password}
            onChange={handleOnChange}
          ></UserInput>
        </InputBox>
        {!valid.pwValid && (
          <ValidWord>비밀번호 8글자 이상 필요합니다.</ValidWord>
        )}
        <LoginButton
          type="submit"
          value="로그인"
          disabled={!(valid.idValid && valid.pwValid)}
          onClick={() => setLogin(true)}
        ></LoginButton>
        <RegisterButton
          type="submit"
          value="회원가입"
          disabled={!(valid.idValid && valid.pwValid)}
          onClick={() => setLogin(false)}
        ></RegisterButton>
      </InputForm>
    </MainBox>
  );
}

export default Login;
