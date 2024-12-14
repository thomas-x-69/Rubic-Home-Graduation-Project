import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import FormRegister from "./components/Fragments/FormRegister";
import Home from "./components/Fragments/Home";

function App() {
  return (
    <div
      className="text-white h-[100vh] flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/Rubic Login.jpg')" }}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
