import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <div>
      <div className="bg-slate-800 border border-slate-700 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-25 relative ">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form action="">
          <div className="relative my-6">
            <input
              id="username"
              type="text"
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-transparent"
              placeholder="Username"
              required
            />
            <label
              htmlFor="username"
              className="absolute left-0 top-0 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Username
            </label>
          </div>
          <div className="relative my-6">
            <input
              id="password"
              type="password"
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-transparent"
              placeholder="Password"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-0 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Password
            </label>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
