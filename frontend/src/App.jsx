import React from "react";
import Login from "./pages/Login";
import Regsister from "./pages/Regsiter";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Regsister />} />
    </Routes>
  );
};

const Root = () => {
  return;
};
export default App;
