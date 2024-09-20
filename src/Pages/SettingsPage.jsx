import React, { useState } from "react";
import Navbar from "./Navbar";
import UserGroupsPage from "./UserGroupsPage";
import LeaderboardPage from "./LeaderboardPage";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [directMessages, setDirectMessages] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const Switch = ({ isChecked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
        isChecked ? "bg-gray-950" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isChecked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>

          <div className="mb-4 border-b border-gray-200">
            <nav className="flex space-x-4">
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "account"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("account")}
              >
                Account
              </button>
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "notifications"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("notifications")}
              >
                Notifications
              </button>
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "privacy"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("privacy")}
              >
                Privacy
              </button>
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "groups"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("groups")}
              >
                Groups
              </button>
              <button
                className={`px-3 py-2 font-medium text-sm ${
                  activeTab === "leaderborad"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("leaderborad")}
              >
                Leaderborad
              </button>
            </nav>
          </div>

          {activeTab === "account" && (
            <div className="bg-white shadow sm:rounded-lg p-6">
              <h2 className="text-xl font-bold">Account Settings</h2>
              <p className="text-gray-500 mb-6">
                Update your account information and password.
              </p>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full h-10 p-4 border border-slate-200 rounded-md focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="current-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className="mt-1 block w-full h-10 p-4 border border-slate-200 rounded-md  focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="mt-1 block w-full h-10 p-4 border border-slate-200 rounded-md  focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="mt-1 block w-full h-10 p-4 border border-slate-200 rounded-md  focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="px-4 py-2 bg-gray-950 hover:bg-gray-800 text-white rounded-md">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white shadow sm:rounded-lg p-6">
              <h2 className="text-xl font-bold">Notification Preferences</h2>
              <p className="text-gray-500 mb-6">
                Choose how you want to be notified.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Email Notifications</span>
                  <Switch
                    isChecked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Push Notifications</span>
                  <Switch
                    isChecked={pushNotifications}
                    onChange={() => setPushNotifications(!pushNotifications)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Weekly Newsletter</span>
                  <Switch
                    isChecked={newsletter}
                    onChange={() => setNewsletter(!newsletter)}
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="px-4 py-2 bg-gray-950 text-white rounded-md">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
          {activeTab === "groups" && <UserGroupsPage />}
          {activeTab === "leaderborad" && <LeaderboardPage />}
          {activeTab === "privacy" && (
            <div>
              <div className="bg-white shadow sm:rounded-lg p-6">
                <h2 className="text-xl font-bold">Privacy Settings</h2>
                <p className="text-gray-500 mb-6">
                  Manage your privacy preferences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Public Profile</span>
                    <Switch
                      isChecked={profileVisibility}
                      onChange={() => setProfileVisibility(!profileVisibility)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Show Online Status</span>
                    <Switch
                      isChecked={onlineStatus}
                      onChange={() => setOnlineStatus(!onlineStatus)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Allow Direct Messages</span>
                    <Switch
                      isChecked={directMessages}
                      onChange={() => setDirectMessages(!directMessages)}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="px-4 py-2 bg-gray-950 text-white rounded-md">
                    Update Privacy Settings
                  </button>
                </div>
              </div>

              <div className="bg-white shadow sm:rounded-lg p-6 mt-6">
                <h2 className="text-xl font-bold">Delete Account</h2>
                <p className="text-gray-500 mb-4">
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
