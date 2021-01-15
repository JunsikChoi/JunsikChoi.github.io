import * as React from "react";
import PostItem from "./PostItem";
import { Post } from "../../interfaces";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
