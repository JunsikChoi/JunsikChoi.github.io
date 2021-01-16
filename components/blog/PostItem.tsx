import React from "react";
import Link from "next/link";
import styles from "../../styles/PostItem.module.scss";
import { Post } from "../../interfaces";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => (
  <div className={styles.container}>
    <Link href="/blog/[id]" as={`/blog/${post.id}`}>
      <a>
        {post.bannerImg ? (
          <div className={styles.bannerImgContainer}>
            <img className={styles.bannerImg} src={post.bannerImg}></img>
          </div>
        ) : null}
      </a>
    </Link>
    <Link href="/blog/[id]" as={`/blog/${post.id}`}>
      <a>
        <div className={styles.postHeader}>
          <div className={styles.postMeta}>
            <h1>{post.title}</h1>
            <span>{post.date}</span>
          </div>
          <div className={styles.postSummary}>
            <p>{post.description}</p>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default PostItem;
