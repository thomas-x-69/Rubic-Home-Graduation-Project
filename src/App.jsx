import React from "react";
import LoginPage from "./pages/login";

function App() {
  return (
    <div
      className="text-white h-[100vh] flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/Rubic Login.jpg')" }}
    >
      <LoginPage />;
    </div>
  );
}

export default App;
