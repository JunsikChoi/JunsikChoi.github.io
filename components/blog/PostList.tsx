import * as React from "react";
import PostItem from "./PostItem";
import { Post } from "../../interfaces";
import styles from "../../styles/PostList.module.scss";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => (
  <div className={styles.postContainer}>
    {posts.map((post) => (
      <div key={post.id} className={styles.postItem}>
        <PostItem post={post} />
      </div>
    ))}
  </div>
);

export default PostList;
