import React from "react";
import Navbar from "./Navbar";
import ThreadDetailPage from "./ThreadDetailPage";
import { Link, useNavigate } from "react-router-dom";

const ForumCard = ({
  title,
  description,
  threadCount,
  postCount,
  lastPost,
}) => {
  return (
    <div className="bg-card text-card-foreground shadow rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">
            <div>{threadCount} threads</div>
            <div>{postCount} posts</div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">
        Last post: {lastPost}
      </div>
    </div>
  );
};

const ForumListPage = () => {
  const navigate = useNavigate();
  const handleCard = () => {
    navigate("/forums-details");
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Forums</h1>

          {/* Search and Filter Section */}
          <div className="mb-6 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search forums..."
              className="w-full md:w-64 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <select className="w-full md:w-48 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground">
              <option value="">All Categories</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="data">Data Science</option>
            </select>
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground">
              Search
            </button>
          </div>

          {/* Forum Categories and Cards */}
          <div className="space-y-8">
            <div className="cursor-pointer">
              <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
              <Link to="/forums-details">
                <ForumCard
                  title="Frontend Development"
                  description="Discuss HTML, CSS, JavaScript, and frontend frameworks"
                  threadCount={150}
                  postCount={750}
                  lastPost="2 hours ago by JohnDoe"
                />
              </Link>

              <ForumCard
                title="Backend Development"
                description="Server-side programming, databases, and APIs"
                threadCount={120}
                postCount={600}
                lastPost="1 day ago by JaneSmith"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Mobile Development
              </h2>
              <ForumCard
                title="iOS Development"
                description="Swift, Objective-C, and iOS app development"
                threadCount={80}
                postCount={400}
                lastPost="3 hours ago by AppleDev"
              />
              <ForumCard
                title="Android Development"
                description="Java, Kotlin, and Android app development"
                threadCount={90}
                postCount={450}
                lastPost="5 hours ago by AndroidGuru"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Science</h2>
              <ForumCard
                title="Machine Learning"
                description="ML algorithms, frameworks, and applications"
                threadCount={60}
                postCount={300}
                lastPost="1 day ago by MLExpert"
              />
              <ForumCard
                title="Data Analysis"
                description="Statistical analysis, data visualization, and insights"
                threadCount={50}
                postCount={250}
                lastPost="2 days ago by DataWizard"
              />
            </div>
          </div>
        </div>
      </main>
      <ThreadDetailPage />
    </div>
  );
};

export default ForumListPage;
