import React, { useState } from "react";
import Navbar from "./Navbar";
import NotificationItem from "./NotificationItem"; // Assume this is the same component

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

export default function NotificationsPage() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [mentions, setMentions] = useState(false);
  const [replies, setReplies] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Notifications</h1>

          {/* Notification Settings */}
          <div className="mb-6 bg-white shadow rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Notification Settings
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage how you receive notifications
              </p>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email-notifications"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Notifications
                </label>
                <Switch
                  isChecked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="push-notifications"
                  className="text-sm font-medium text-gray-700"
                >
                  Push Notifications
                </label>
                <Switch
                  isChecked={pushNotifications}
                  onChange={() => setPushNotifications(!pushNotifications)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="mentions"
                  className="text-sm font-medium text-gray-700"
                >
                  Mentions
                </label>
                <Switch
                  isChecked={mentions}
                  onChange={() => setMentions(!mentions)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="replies"
                  className="text-sm font-medium text-gray-700"
                >
                  Replies to your posts
                </label>
                <Switch
                  isChecked={replies}
                  onChange={() => setReplies(!replies)}
                />
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Recent Notifications
              </h2>
            </div>
            <div className="p-4">
              <NotificationItem
                type="New Reply"
                content="JohnDoe replied to your post in 'React Hooks Best Practices'"
                date="2 hours ago"
                isRead={false}
              />
              <NotificationItem
                type="Mention"
                content="You were mentioned by JaneSmith in 'CSS Grid vs Flexbox'"
                date="1 day ago"
                isRead={true}
              />
              <NotificationItem
                type="Like"
                content="BobJohnson liked your comment in 'Node.js Performance Tips'"
                date="2 days ago"
                isRead={true}
              />
              <NotificationItem
                type="New Follower"
                content="AliceWilliams started following you"
                date="3 days ago"
                isRead={true}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
