import React, { useState } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";

function App() {
  const [token, setToKen] = useState(sessionStorage.getItem("userToken"));
  const handleToken = () => {
    setToKen(sessionStorage.getItem("userToken"));
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            token !== null ? (
              <Navigate to="/todo" />
            ) : (
              <Main handleToken={handleToken} />
            )
          }
        />
        <Route
          path="/todo"
          element={token !== null ? <Todo /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
