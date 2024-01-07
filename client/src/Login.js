import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginLayout from "./LoginLayout";
import SignIn from "./signIn"

const Login = () => {
  return (
    <LoginLayout>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </LoginLayout>
  );
};

export default Login;
