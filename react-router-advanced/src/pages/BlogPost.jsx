import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamic blog post route example.</p>
    </div>
  );
};

export default BlogPost;
