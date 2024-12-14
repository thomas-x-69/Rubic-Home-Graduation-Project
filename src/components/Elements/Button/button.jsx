const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props;
  return (
    <button
      className={`px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
