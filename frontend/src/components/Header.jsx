import whole from "../assets/whole.png";
import baseline from "../assets/baseline-arrow_drop_down-24px.jpg";
const Header = () => {
  return (
    <header className="bg-white py-3 px-4 md:px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <img src={whole} alt="" />
      </div>

      <div className="hidden md:flex flex-grow max-w-md mx-4 relative">
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 font-semibold"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4 text-sm md:text-base">
        <span className="hidden lg:block text-gray-700">Create account.</span>
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          It's free!
        </a>
        <img src={baseline} className="cursor-pointer" />
      </div>
    </header>
  );
};
export default Header;
