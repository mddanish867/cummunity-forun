import React from "react";
import Navbar from "./Navbar";

const ForumCategory = ({ title, description, threadCount, postCount }) => {
  return (
    <div className="bg-card text-card-foreground shadow rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1">{description}</p>
      <div className="mt-2 text-sm text-muted-foreground">
        <span>{threadCount} threads</span>
        <span className="ml-2">{postCount} posts</span>
      </div>
    </div>
  );
};

const ThreadPreview = ({ title, author, date, replyCount }) => {
  return (
    <div className="bg-card text-card-foreground shadow rounded-lg p-4 mb-4">
      <h4 className="text-md font-semibold">{title}</h4>
      <div className="mt-2 text-sm text-muted-foreground">
        <span>By {author}</span>
        <span className="ml-2">{date}</span>
        <span className="ml-2">{replyCount} replies</span>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Welcome to Our Community</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Latest Threads</h2>
              <ThreadPreview
                title="How to get started with React?"
                author="JohnDoe"
                date="2 hours ago"
                replyCount={5}
              />
              <ThreadPreview
                title="Best practices for API design"
                author="JaneSmith"
                date="1 day ago"
                replyCount={12}
              />
              <ThreadPreview
                title="Debugging techniques for Node.js"
                author="BobJohnson"
                date="3 days ago"
                replyCount={8}
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Forum Categories</h2>
              <ForumCategory
                title="Web Development"
                description="Discuss all things web dev"
                threadCount={100}
                postCount={500}
              />
              <ForumCategory
                title="Mobile Development"
                description="iOS, Android, and more"
                threadCount={80}
                postCount={350}
              />
              <ForumCategory
                title="Data Science"
                description="ML, AI, and data analysis"
                threadCount={60}
                postCount={200}
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Community Announcements
            </h2>
            <div className="bg-card text-card-foreground shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">New Forum Rules</h3>
              <p className="mt-2">
                Please review our updated community guidelines to ensure a
                positive experience for all members.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
