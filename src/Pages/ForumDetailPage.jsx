import React from "react";
import Navbar from "./Navbar";

const ThreadCard = ({ title, author, date, replyCount, lastReply }) => {
  return (
    <div className="bg-white text-gray-900 shadow rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Started by {author} on {date}
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">
            <div>{replyCount} replies</div>
            <div>Last reply: {lastReply}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ForumDetailPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Frontend Development</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              New Thread
            </button>
          </div>

          <p className="text-gray-500 mb-6">
            Discuss HTML, CSS, JavaScript, and frontend frameworks
          </p>

          <div className="mb-6 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search threads..."
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Sort by</option>
              <option value="latest">Latest</option>
              <option value="popular">Most Popular</option>
              <option value="unanswered">Unanswered</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>

          <div className="space-y-4">
            <ThreadCard
              title="Best practices for React Hooks"
              author="JohnDoe"
              date="2023-08-15"
              replyCount={12}
              lastReply="2 hours ago"
            />
            <ThreadCard
              title="CSS Grid vs Flexbox: When to use which?"
              author="JaneSmith"
              date="2023-08-14"
              replyCount={8}
              lastReply="1 day ago"
            />
            <ThreadCard
              title="JavaScript async/await explained"
              author="BobJohnson"
              date="2023-08-13"
              replyCount={15}
              lastReply="3 hours ago"
            />
            <ThreadCard
              title="Optimizing React performance"
              author="AliceWilliams"
              date="2023-08-12"
              replyCount={20}
              lastReply="5 hours ago"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 mr-2">
              Previous
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
