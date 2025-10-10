// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  // Use React Query with advanced options
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5, // cache data for 5 minutes
    refetchOnWindowFocus: false, // don't refetch automatically when tab regains focus
    keepPreviousData: true, // keep previous data while fetching new data
  });

  // Loading state
  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  // Error state
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
