import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <div
      className="min-h-screen w-full absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('../src/assets/Rubic Login.jpg')" }}
    >
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-xl p-10 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wider">
          Register
        </h1>
        <form className="space-y-6">
          <InputForm
            title="Full Name"
            name="fullname"
            placeholder="Insert your name here"
            type="text"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <InputForm
            title="Email"
            name="email"
            placeholder="Insert your email here"
            type="email"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <InputForm
            title="Password"
            name="password"
            placeholder="****************"
            type="password"
            className="mb-4 text-white"
            labelClassName="text-white"
          />
          <InputForm
            title="Confirm Password"
            name="confirmpassword"
            placeholder="****************"
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
