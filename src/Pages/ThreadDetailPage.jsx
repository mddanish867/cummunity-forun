import React from "react";

const Post = ({ author, date, content, votes, isOriginalPost }) => {
  return (
    <div
      className={`bg-card text-card-foreground shadow rounded-lg p-6 mb-4 ${
        isOriginalPost ? "border-2 border-primary" : ""
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10">
          <img
            className="rounded-full"
            src="/placeholder.svg?height=40&width=40"
            alt={author}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{author}</h3>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
            {isOriginalPost && (
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                Original Post
              </span>
            )}
          </div>
          <div className="mt-2">{content}</div>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <button className="border border-muted-foreground px-3 py-1 rounded text-sm flex items-center mb-2 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Upvote
            </button>
            <span className="text-muted-foreground mb-2 sm:mb-0">{votes} votes</span>
            <button className="border border-muted-foreground px-3 py-1 rounded text-sm flex items-center mb-2 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Downvote
            </button>
            <button className="text-sm text-primary">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ThreadDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-semibold mb-6">
            Best practices for React Hooks
          </h1>

          <Post
            author="JohnDoe"
            date="2023-08-15 10:30 AM"
            content="React Hooks have revolutionized the way we write React components. In this thread, I'd like to discuss some best practices for using hooks effectively. What are your thoughts on custom hooks? How do you handle side effects with useEffect?"
            votes={25}
            isOriginalPost={true}
          />

          <div className="space-y-4 mt-8">
            <Post
              author="JaneSmith"
              date="2023-08-15 11:15 AM"
              content="Great topic! One best practice I always follow is to use the exhaustive-deps rule with the ESLint plugin. It helps catch a lot of potential bugs related to missing dependencies in useEffect."
              votes={12}
              isOriginalPost={false}
            />
            <Post
              author="BobJohnson"
              date="2023-08-15 12:45 PM"
              content="I've found that extracting complex logic into custom hooks not only makes the code more reusable but also easier to test. For example, I often create hooks like useFetch for data fetching operations."
              votes={8}
              isOriginalPost={false}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Reply to this thread</h2>
            <textarea
              className="min-h-[100px] w-full p-3 border rounded-md mb-4"
              placeholder="Type your reply here..."
            ></textarea>
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Post Reply
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
