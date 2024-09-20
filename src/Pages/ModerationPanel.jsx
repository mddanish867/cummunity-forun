import React, { useState } from "react";
import Navbar from "./Navbar";

const ModerationPanel = () => {
  const [activeTab, setActiveTab] = useState("reports");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-semibold mb-6">Moderation Panel</h1>

          <div className="mb-4 border-b border-gray-200">
            <nav className="flex flex-wrap space-x-4">
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "reports"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("reports")}
              >
                Reports
              </button>
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "bans"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("bans")}
              >
                Bans
              </button>
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "logs"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("logs")}
              >
                Moderation Logs
              </button>
            </nav>
          </div>

          {activeTab === "reports" && (
            <div className="bg-white shadow sm:rounded-lg p-6 overflow-x-auto">
              <h2 className="text-xl font-bold">Reported Content</h2>
              <p className="text-gray-500 mb-6">
                Review and take action on reported content
              </p>
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Reported By</th>
                    <th className="px-4 py-2">Content Type</th>
                    <th className="px-4 py-2">Reason</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-200">
                    <td className="px-4 py-2">user123</td>
                    <td className="px-4 py-2">Post</td>
                    <td className="px-4 py-2">Inappropriate content</td>
                    <td className="px-4 py-2">2023-08-15</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 border border-gray-300 rounded-md mr-2">
                        Review
                      </button>
                      <button className="px-2 py-1 bg-red-600 text-white rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">user456</td>
                    <td className="px-4 py-2">Comment</td>
                    <td className="px-4 py-2">Spam</td>
                    <td className="px-4 py-2">2023-08-14</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 border border-gray-300 rounded-md mr-2">
                        Review
                      </button>
                      <button className="px-2 py-1 bg-red-600 text-white rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "bans" && (
            <div className="bg-white shadow sm:rounded-lg p-6 overflow-x-auto">
              <h2 className="text-xl font-bold">User Bans</h2>
              <p className="text-gray-500 mb-6">Manage banned users</p>
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Reason</th>
                    <th className="px-4 py-2">Ban Date</th>
                    <th className="px-4 py-2">Expiry Date</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-200">
                    <td className="px-4 py-2">spammer123</td>
                    <td className="px-4 py-2">Repeated spam</td>
                    <td className="px-4 py-2">2023-08-10</td>
                    <td className="px-4 py-2">2023-09-10</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 border border-gray-300 rounded-md">
                        Unban
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">troll456</td>
                    <td className="px-4 py-2">Harassment</td>
                    <td className="px-4 py-2">2023-08-12</td>
                    <td className="px-4 py-2">Permanent</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 border border-gray-300 rounded-md">
                        Review
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "logs" && (
            <div className="bg-white shadow sm:rounded-lg p-6 overflow-x-auto">
              <h2 className="text-xl font-bold">Moderation Logs</h2>
              <p className="text-gray-500 mb-6">
                Review recent moderation actions
              </p>
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Moderator</th>
                    <th className="px-4 py-2">Action</th>
                    <th className="px-4 py-2">Target</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-200">
                    <td className="px-4 py-2">mod_alice</td>
                    <td className="px-4 py-2">Deleted post</td>
                    <td className="px-4 py-2">user789</td>
                    <td className="px-4 py-2">2023-08-15 14:30</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 border border-gray-300 rounded-md">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">mod_bob</td>
                    <td className="px-4 py-2">Banned user</td>
                    <td className="px-4 py-2">troll456</td>
                    <td className="px-4 py-2">2023-08-12 09:15</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 border border-gray-300 rounded-md">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ModerationPanel;
