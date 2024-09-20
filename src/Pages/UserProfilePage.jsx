import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const ActivityItem = ({ title, date, type }) => {
  return (
    <div className="flex items-center space-x-4 py-2">
      <div
        className={`w-2 h-2 rounded-full ${
          type === "post" ? "bg-blue-500" : "bg-green-500"
        }`}
      ></div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default function UserProfilePage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("activity");
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Left Side Profile Card */}
            <div className="md:w-1/3">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="John Doe"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">John Doe</h2>
                    <p className="text-gray-500">@johndoe</p>
                  </div>
                </div>
                <p className="text-gray-500 my-4">
                  Web developer passionate about React and Node.js
                </p>
                <div className="flex space-x-4 text-sm">
                  <div>
                    <p className="font-medium">Posts</p>
                    <p className="text-gray-500">123</p>
                  </div>
                  <div>
                    <p className="font-medium">Replies</p>
                    <p className="text-gray-500">456</p>
                  </div>
                  <div>
                    <p className="font-medium">Joined</p>
                    <p className="text-gray-500">Jan 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Tabs */}
            <div className="md:w-2/3 mt-6 md:mt-0">
              <div>
                {/* Tabs Navigation */}
                <div className="flex space-x-4 border-b mb-4">
                  <button
                    onClick={() => setActiveTab("activity")}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "activity"
                        ? "text-gray-700 bg-white"
                        : "text-gray-500 bg-gray-100"
                    } rounded-t-md`}
                  >
                    Recent Activity
                  </button>
                  <button
                    onClick={() => setActiveTab("posts")}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "posts"
                        ? "text-gray-700 bg-white"
                        : "text-gray-500 bg-gray-100"
                    } rounded-t-md`}
                  >
                    Posts
                  </button>
                  <button
                    onClick={() => setActiveTab("replies")}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "replies"
                        ? "text-gray-700 bg-white"
                        : "text-gray-500 bg-gray-100"
                    } rounded-t-md`}
                  >
                    Replies
                  </button>
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "replies"
                        ? "text-gray-700 bg-white"
                        : "text-gray-500 bg-gray-100"
                    } rounded-t-md`}
                  >
                    Dashboard
                  </button>
                </div>

                {/* Activity Tab Content */}
                {activeTab === "activity" && (
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">
                      Recent Activity
                    </h3>
                    <ActivityItem
                      title="Posted in 'React Hooks Best Practices'"
                      date="2 hours ago"
                      type="post"
                    />
                    <ActivityItem
                      title="Replied to 'CSS Grid vs Flexbox'"
                      date="1 day ago"
                      type="reply"
                    />
                    <ActivityItem
                      title="Posted in 'Node.js Performance Tips'"
                      date="3 days ago"
                      type="post"
                    />
                  </div>
                )}

                {/* Posts Tab Content */}
                {activeTab === "posts" && (
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                    <ActivityItem
                      title="React Hooks Best Practices"
                      date="2 hours ago"
                      type="post"
                    />
                    <ActivityItem
                      title="Node.js Performance Tips"
                      date="3 days ago"
                      type="post"
                    />
                  </div>
                )}

                {/* Replies Tab Content */}
                {activeTab === "replies" && (
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Recent Replies
                    </h3>
                    <ActivityItem
                      title="Replied to 'CSS Grid vs Flexbox'"
                      date="1 day ago"
                      type="reply"
                    />
                  </div>
                )}

                {/* Replies Tab Content */}
                {activeTab === "dashboard" && (
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Dashboard</h3>
                    <button onClick={handleDashboard}>Dashboard</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
