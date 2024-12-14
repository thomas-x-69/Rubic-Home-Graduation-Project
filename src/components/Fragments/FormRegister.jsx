import React from "react";
import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  };

  return (
    <div
      className="min-h-screen w-full absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('../src/assets/Rubic Login.jpg')" }}
    >
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-xl p-10 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wider">
          Register
        </h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          <InputForm
            title="Full Name"
            name="fullname"
            placeholder="Enter your name here"
            type="text"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <InputForm
            title="Email"
            name="email"
            placeholder="Enter your email here"
            type="email"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <InputForm
            title="Password"
            name="password"
            placeholder="********"
            type="password"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <InputForm
            title="Confirm Password"
            name="confirmpassword"
            placeholder="********"
            type="password"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <div className="pt-4">
            <Button variant="bg-blue-600 w-full hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-102 active:scale-98 shadow-lg hover:shadow-xl">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
