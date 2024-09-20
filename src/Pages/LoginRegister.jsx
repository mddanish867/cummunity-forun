import React, { useState } from "react";
import Navbar from "./Navbar";

export default function LoginRegistrationPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Tabs List */}
          <div className="grid grid-cols-2 border-b border-gray-200">
            <button
              className={`py-2 text-center font-medium ${
                activeTab === "login"
                  ? "text-gray-950 border-b-2 border-gray-950"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`py-2 text-center font-medium ${
                activeTab === "register"
                  ? "text-gray-950 border-b-2 border-gray-950"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          {/* Login Tab Content */}
          {activeTab === "login" && (
            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <p className="text-gray-500 mb-4">
                Enter your credentials to access your account
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded text-gray-950 focus:ring-gray-900"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-2">
                <button className="w-full px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-gray-800">
                  Login
                </button>
                <a
                  href="#"
                  className="text-sm text-center text-gray-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          )}

          {/* Register Tab Content */}
          {activeTab === "register" && (
            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
              <h2 className="text-xl font-semibold">Register</h2>
              <p className="text-gray-500 mb-4">
                Create a new account to join our community
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="johndoe"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-blue-700">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
