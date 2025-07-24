import React from "react";

const LeftSection = () => {
  return (
    <div className="hidden md:block md:w-1/3 space-y-6 ">
      <div className="p-10  bg-none">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full text-gray-700 outline-none"
            />
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-gray-500 text-xs py-4 mt-2 flex items-center  border-t">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Your location will help us server better and extend a personlised
          experience.
        </p>
      </div>

      {/* Recommended Groups */}
      <div className="rounded-lg p-4 ">
        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6v-4c0-1.33.156-2.653.456-3.927l.07-.291A7.001 7.001 0 0014 10z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9V2m0 0a2 2 0 00-2 2v1h4V4a2 2 0 00-2-2z"
            ></path>
          </svg>
          Recommended Groups
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/32x32/FFECB3/FFC107?text=RG1"
                alt="Group"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-700">Photography</span>
            </div>
            <button className="px-3 py-1 bg-gray-200 rounded-full text-blue-600 text-xs font-semibold hover:bg-gray-300">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/32x32/DCEDC8/8BC34A?text=RG2"
                alt="Group"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-700">Cooking</span>
            </div>
            <button className="px-3 py-1 bg-gray-200 rounded-full text-blue-600 text-xs font-semibold hover:bg-gray-300">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/32x32/B3E5FC/03A9F4?text=RG3"
                alt="Group"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-700">Design</span>
            </div>
            <button className="px-3 py-1 bg-gray-200 rounded-full text-blue-600 text-xs font-semibold hover:bg-gray-300">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/32x32/FFCDD2/E57373?text=RG4"
                alt="Group"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-700">Science</span>
            </div>
            <button className="px-3 py-1 bg-gray-200 rounded-full text-blue-600 text-xs font-semibold hover:bg-gray-300">
              Follow
            </button>
          </div>
        </div>
        <button className="w-full mt-4 py-2 text-blue-600 text-sm font-semibold hover:underline">
          See More...
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
