import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Post #{id}</h1>
      <p>This is a dynamic route for post ID: {id}</p>
    </div>
  );
};

export default Post;
