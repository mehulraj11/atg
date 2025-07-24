import React, { useState } from "react";
import Group3 from "../assets/Group 3.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In clicked", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
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
            <a href="#" className="text-blue-600 hover:underline">
              Create new for free!
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-12 pt-0">
            {" "}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 pr-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      ></path>
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    )}
                    {!showPassword && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold"
              >
                Sign In
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">
                Or continue with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold">
                <svg
                  className="w-5 h-5 mr-2 rounded-xl"
                  fill="blue"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.496v-8.735H9.722V11.69h3.099V8.586c0-3.067 1.87-4.733 4.583-4.733 1.307 0 2.43.098 2.75.142v3.204l-1.898.001c-1.487 0-1.777.708-1.777 1.746v2.29h3.593l-.596 3.718h-2.997V24h6.125c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
                Sign in with Facebook
              </button>
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold">
                <svg
                  className="w-5 h-5 mr-2 "
                  fill="google"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.24 10.297v2.411h6.63c-.198 1.187-.856 2.42-2.316 3.328l.006.006 2.074 1.604c1.474-1.374 2.329-3.345 2.329-5.748 0-.806-.109-1.57-.303-2.291z" />
                  <path d="M12.24 24c3.236 0 5.954-1.066 7.936-2.887l-2.074-1.604c-1.165.73-2.663 1.168-4.362 1.168-3.383 0-6.25-2.275-7.275-5.337L2.83 17.06l-.006.006 2.074 1.604c1.025 1.58 2.628 2.66 4.49 3.06z" />
                  <path d="M4.965 14.18c-.287-.806-.45-1.67-.45-2.58s.163-1.774.45-2.58l-.006-.006-2.074-1.604c-.782 1.547-1.235 3.28-1.235 5.09s.453 3.543 1.235 5.09z" />
                  <path d="M12.24 4.103c1.834 0 3.49.63 4.79 1.857l1.83-1.83c-1.59-1.473-3.66-2.329-5.95-2.329-3.383 0-6.25 2.275-7.275 5.337L4.965 9.82c1.025-1.58 2.628-2.66 4.49-3.06z" />
                </svg>
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
