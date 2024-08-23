export default function Newsletter() {
  return (
    <div className=" flex-row h-10 w-full pr-2">
      <form className=" shadow-lg rounded-lg">
        <div className="relative flex-col sm:flex-col md:flex-row items-center md:items-center">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            aria-label="Enter your Email"
            required
            className="block w-full px-4 my-2 border-2 bg-[#232935]  border-gray-700 rounded-full shadow-sm placeholder:text-white focus:outline-none"
          />
          <button
            type="submit"
            className=" block sm:absolute w-full sm:w-auto md:ml-2 text-[14px] bg-[#5D5DFF] text-white text-center rounded-full sm:inset-y-0 right-1 px-10 my-1 py-3 sm:py-2 md:py-0"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
