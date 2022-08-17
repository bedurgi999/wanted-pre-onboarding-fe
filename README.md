# 원티드 프리온보딩 선발과제-프론트엔드

## 실행 방법

백엔드 실행 방법
1. back 폴더 안에서 `npm install` or  `yarn install`을 사용해 패키지 설치
2. back 폴더 안에서 `npm start` or `yarn start`

프론트엔드 실행 방법
1. front 폴더 안에서 `npm install` or  `yarn install`을 사용해 패키지 설치
2. front 폴더 안에서 `npm start` or `yarn start`

## 사용 라이브러리 및 기술 스택
- React
- Typescript
- Axios
- Styled-Components
- React Router

## 구현 기능

### 로그인 / 회원가입

* - [x] `/` 경로에 로그인 및 회원가입 기능을 개발
  * - [x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성

#### Assignment1
* - [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  * - [x] 이메일 조건: @ 포함
  * - [x] 비밀번호 조건: 8자 이상
  * - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

#### Assignment2
* - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동
  * - [x] 응답받은 JWT는 로컬 스토리지에 저장

#### Assignment3
* - [x] 로그인 여부에 따른 리다이렉트 처리 구현
  * - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트
  * - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트

### 투두 리스트

#### Assignment4
* - [x] /todo경로에 접속하면 투두 리스트의 목록을 확인 가능
* - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시
* - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가 가능

#### Assignment5
* - [x] 투두 리스트의 수정, 삭제 기능을 구현
  * - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정 가능
  * - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
  * - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제

----

## 구현하면서 배운 것
form 태그 안에서 버튼이 두 개 있을경우
두 개의 버튼 중 어떤 버튼이 submit 기능을 하는 버튼인지 구분을 못함
submit 기능을 할 버튼의 속성으로 `type=submit`을 추가해주고 남은 버튼은 속성으로 `type=button`을 추가해줘야한다.
