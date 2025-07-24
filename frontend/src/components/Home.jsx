import Header from "./Header";
import HeroSection from "./HeroSection";
import ArticleCard from "./ArticleCard";
import articles from "../data/article";
import LeftSection from "./LeftSection";
import Login from "../pages/Login";
import { useEffect, useState } from "react";

function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!token) {
        setShowLoginModal(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">
      {" "}
      <div
        className={`transition-all duration-300 ${
          showLoginModal ? "filter blur-sm pointer-events-none" : ""
        }`}
      >
        <Header />
        <HeroSection />

        <div className="container mx-auto p-4 md:p-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center mx-30 mb-6 pb-4 ">
            <div className="flex space-x-4 mb-4 md:mb-0 text-gray-700 text-sm md:text-base">
              <button className="font-semibold text-gray-900 border-b-2 border-gray-900 pb-2">
                All Posts(32)
              </button>
              <button className="pb-2">Article</button>
              <button className="pb-2">Event</button>
              <button className="pb-2">Education</button>
              <button className="pb-2">Job</button>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 text-sm font-bold">
                Write a Post
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Join Group
              </button>
            </div>
          </div>

          <main className="flex flex-col md:flex-row gap-60 mx-30 ">
            <div className="w-full md:w-2/3 space-y-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            <LeftSection />
          </main>
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className=" w-1/2 h-1/2 rounded-lg  flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <Login setShowLoginModal={setShowLoginModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
