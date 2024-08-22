const SignInForm = () => {
  return (
    <div>
      <div className=" flex-row h-20 w-full p-2">
        <h1>Sign in With Username and Password</h1>
        <form className=" shadow-lg rounded-lg">
          <div className="relative flex-col sm:flex-col md:flex-row items-center md:items-center">
            <input
              type="txt"
              id="username"
              name="username"
              placeholder="Enter Your Username"
              aria-label="Enter your username"
              required
              className="block w-full p-4 my-2 border-2 bg-white  border-gray-700 rounded-lg shadow-sm placeholder:text-gray-800 focus:outline-none"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              aria-label="Enter your Password"
              required
              className="block w-full p-4 my-2 border-2 bg-white  border-gray-700 rounded-lg shadow-sm placeholder:text-gray-800 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
