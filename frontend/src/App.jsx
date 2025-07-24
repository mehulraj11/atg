import React from "react";
import Login from "./pages/Login";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

const Root = () => {
  return;
};
export default App;
