import React, { useState } from "react";
import Group3 from "../assets/Group 3.png";
import facebook from "../assets/f_logo_RGB-Blue_1024.png";
import google from "../assets/search.png";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In clicked", { email, password });
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl relative">
        <div className="bg-green-100 text-green-800 p-4 rounded-t-lg text-center text-sm md:text-base">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 👋
        </div>

        <div className="flex justify-between items-center p-8 md:p-12 pb-0">
          {" "}
          <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Create new for free!
            </Link>
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-12 pt-0">
            {" "}
            <form onSubmit={handleSubmit}>
              <InputField
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                setter={setEmail}
              />
              <InputField
                htmlFor="password"
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                setter={setPassword}
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 my-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold"
              >
                Sign In
              </button>
            </form>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold">
                <img src={facebook} className="mx-2" />
                Sign in with Facebook
              </button>
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold">
                <img src={google} className="mx-2" />
                Sign in with Google
              </button>
            </div>
          </div>

          <div className="hidden md:flex w-1/2 rounded-r-lg items-center justify-center p-8">
            <img
              src={Group3}
              alt="Illustration of people interacting with a mobile device"
              className="max-w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x300/E0E0E0/333333?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
