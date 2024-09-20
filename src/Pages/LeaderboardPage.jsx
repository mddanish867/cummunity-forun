import React from "react";

const LeaderboardTable = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100 border-b">
          <th className="p-4 text-left text-sm font-medium text-gray-700">
            Rank
          </th>
          <th className="p-4 text-left text-sm font-medium text-gray-700">
            User
          </th>
          <th className="p-4 text-left text-sm font-medium text-gray-700">
            Posts
          </th>
          <th className="p-4 text-left text-sm font-medium text-gray-700">
            Likes
          </th>
          <th className="p-4 text-left text-sm font-medium text-gray-700">
            Joined
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={user.id} className="border-b">
            <td className="p-4 text-sm text-gray-900 font-medium">
              {index + 1}
            </td>
            <td className="p-4 text-sm text-gray-900">{user.name}</td>
            <td className="p-4 text-sm text-gray-900">{user.posts}</td>
            <td className="p-4 text-sm text-gray-900">{user.likes}</td>
            <td className="p-4 text-sm text-gray-900">{user.joined}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Tabs = ({ tabs, selectedTab, onSelect }) => (
  <div>
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onSelect(tab.value)}
          className={`px-4 py-2  ${
            selectedTab === tab.value
              ? "bg-white border-b border-gray-950 text-gray-500"
              : "bg-white text-gray-500"
          } transition-colors`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    {tabs.find((tab) => tab.value === selectedTab)?.content}
  </div>
);

export default function LeaderboardPage() {
  const [selectedTab, setSelectedTab] = React.useState("all-time");

  const dummyData = [
    { id: 1, name: "John Doe", posts: 1234, likes: 5678, joined: "Jan 2022" },
    { id: 2, name: "Jane Smith", posts: 987, likes: 4321, joined: "Mar 2022" },
    { id: 3, name: "Bob Johnson", posts: 567, likes: 2345, joined: "May 2022" },
    {
      id: 4,
      name: "Alice Williams",
      posts: 321,
      likes: 1234,
      joined: "Jul 2022",
    },
    {
      id: 5,
      name: "Charlie Brown",
      posts: 159,
      likes: 753,
      joined: "Sep 2022",
    },
  ];

  const tabs = [
    {
      label: "All Time",
      value: "all-time",
      content: <LeaderboardTable data={dummyData} />,
    },
    {
      label: "This Month",
      value: "monthly",
      content: <LeaderboardTable data={dummyData.slice(0, 3)} />,
    },
    {
      label: "This Week",
      value: "weekly",
      content: <LeaderboardTable data={dummyData.slice(0, 2)} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

          <div className="bg-white shadow-sm border rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Top Contributors</h2>
              <p className="text-gray-500">
                Recognizing our most active community members
              </p>
            </div>
            <Tabs
              tabs={tabs}
              selectedTab={selectedTab}
              onSelect={setSelectedTab}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
