import React from "react";
import Navbar from "./Navbar";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-xl font-semibold">Total Users</h2>
              <p className="text-gray-500">Active users on the platform</p>
              <p className="text-4xl font-bold">1,234</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-xl font-semibold">Total Posts</h2>
              <p className="text-gray-500">All posts across all forums</p>
              <p className="text-4xl font-bold">5,678</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-xl font-semibold">Active Forums</h2>
              <p className="text-gray-500">
                Number of active discussion forums
              </p>
              <p className="text-4xl font-bold">42</p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg mb-6">
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                Recent User Registrations
              </h2>
              <table className="min-w-full mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Username</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Joined</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">johndoe</td>
                    <td className="border px-4 py-2">john@example.com</td>
                    <td className="border px-4 py-2">2023-08-15</td>
                    <td className="border px-4 py-2">
                      <button className="border border-gray-900 text-gray-900 rounded-md px-2 py-1 hover:bg-gray-900 hover:text-white">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">janedoe</td>
                    <td className="border px-4 py-2">jane@example.com</td>
                    <td className="border px-4 py-2">2023-08-14</td>
                    <td className="border px-4 py-2">
                      <button className="border border-gray-900 text-gray-900 rounded-md px-2 py-1 hover:bg-gray-900 hover:text-white">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Recent Reports</h2>
              <table className="min-w-full mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Reported By</th>
                    <th className="px-4 py-2 text-left">Reason</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">user123</td>
                    <td className="border px-4 py-2">Inappropriate content</td>
                    <td className="border px-4 py-2">2023-08-15</td>
                    <td className="border px-4 py-2">
                      <button className="border border-gray-900 text-gray-900 rounded-md px-2 py-1 hover:bg-gray-900 hover:text-white">
                        Review
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">user456</td>
                    <td className="border px-4 py-2">Spam</td>
                    <td className="border px-4 py-2">2023-08-14</td>
                    <td className="border px-4 py-2">
                      <button className="border border-gray-900 text-gray-900 rounded-md px-2 py-1 hover:bg-gray-900 hover:text-white">
                        Review
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
