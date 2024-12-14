import React, { useState } from "react";
import Button from "../Elements/Button/button";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === username &&
      storedUser.password === password
    ) {
      navigate("https://rubik-home-dashboard.netlify.app/");
    } else {
      setError("Invalid username or password");
    }
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const autoFillUsername = storedUser?.email || "";
  const autoFillPassword = storedUser?.password || "";

  return (
    <div>
      <div className="bg-slate-800 border border-slate-700 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-25 relative">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="relative my-6">
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={autoFillUsername}
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-transparent"
              placeholder="Username"
              required
            />
            <label
              htmlFor="username"
              className="absolute left-0 top-0 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-[-10PX] peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email
            </label>
          </div>
          <div className="relative my-6">
            <input
              id="password"
              name="password"
              type="password"
              defaultValue={autoFillPassword}
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-transparent"
              placeholder="Password"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-0 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-[-10PX] peer-focus:text-sm peer-focus:text-blue-600"
            >
              Password
            </label>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
