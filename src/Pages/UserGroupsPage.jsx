import React from "react";

const GroupCard = ({ name, description, memberCount }) => (
  <div className="bg-white shadow-sm border rounded-lg p-4 mb-4">
    <div className="mb-4">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{memberCount} members</p>
    </div>
    <p className="text-gray-500 mb-6">{description}</p>
    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
      Join Group
    </button>
  </div>
);

export default function UserGroupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6 flex-wrap">
            <h1 className="text-4xl font-semibold">User Groups</h1>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 mt-4 sm:mt-0">
              Create New Group
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <GroupCard
              name="React Enthusiasts"
              description="A group for React developers to share knowledge and discuss best practices."
              memberCount={1234}
            />
            <GroupCard
              name="Python Programmers"
              description="Connect with fellow Python programmers and explore the language together."
              memberCount={2345}
            />
            <GroupCard
              name="Data Science Hub"
              description="Discuss the latest trends in data science, machine learning, and AI."
              memberCount={3456}
            />
            <GroupCard
              name="Web Design Inspiration"
              description="Share and get inspired by beautiful web designs and UI/UX concepts."
              memberCount={4567}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
