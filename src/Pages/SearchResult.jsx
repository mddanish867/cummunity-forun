import React from "react";
import Navbar from "./Navbar";

const SearchResult = ({ title, content, author, date, relevance }) => {
  return (
    <div className="bg-white shadow-sm border rounded-md mb-4 p-6">
      <h3 className="text-2xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">
        by {author} on {date} | Relevance: {relevance}%
      </p>
      <p className="text-gray-500 mt-14">{content}</p>
      <button className="mt-4 text-gray-950 hover:underline">Read more</button>
    </div>
  );
};

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Search Results</h1>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow border border-gray-300 rounded-md p-2"
              defaultValue="React hooks"
            />
            <select className="border border-gray-300 rounded-md p-2">
              <option value="">All Categories</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="data">Data Science</option>
            </select>
            <button className="bg-gray-900 text-white rounded-md px-4 py-2">
              Search
            </button>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap space-x-4">
              <button className="px-4 py-2 border-b-2 border-gray-900 text-gray-900">
                All Results
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                Posts
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                Comments
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                Users
              </button>
            </div>
          </div>

          <div>
            <SearchResult
              title="Understanding React Hooks"
              content="React Hooks are a powerful feature that allow you to use state and other React features without writing a class. This post explores the most commonly used hooks and their applications."
              author="JohnDoe"
              date="2023-08-15"
              relevance={95}
            />
            <SearchResult
              title="Custom Hooks in React"
              content="Learn how to create your own custom hooks to reuse stateful logic between different components. This can help in keeping your code DRY and more maintainable."
              author="JaneSmith"
              date="2023-08-10"
              relevance={88}
            />
            <SearchResult
              title="React Hooks vs Class Components"
              content="A comparison between using hooks in functional components and traditional class components. We'll explore the pros and cons of each approach."
              author="BobJohnson"
              date="2023-08-05"
              relevance={82}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-center">
            <button className="bg-white text-gray-800 border border-slate-200 rounded-md px-4 py-2 mr-2 mb-2 sm:mb-0">
              Previous
            </button>
            <button className="bg-white text-gray-800 border border-slate-200 rounded-md px-4 py-2">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
