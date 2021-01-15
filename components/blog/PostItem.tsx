import React from "react";
import Link from "next/link";

import { Post } from "../../interfaces";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => (
  <Link href="/blog/[id]" as={`/blog/${post.id}`}>
    <a>
      <h1>{post.title}</h1>
      <h3>{post.date}</h3>
      <p>{post.description}</p>
    </a>
  </Link>
);

export default PostItem;
