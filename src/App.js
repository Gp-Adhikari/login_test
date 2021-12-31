import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
