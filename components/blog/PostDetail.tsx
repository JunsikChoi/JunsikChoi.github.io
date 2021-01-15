import * as React from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/PostDetail.module.scss";
import { Post } from "../../interfaces";
import gfm from "remark-gfm";
import toc from "remark-toc";
import math from "remark-math";
import "katex/dist/katex.min.css";
import renderers from "./renderers";

type PostDetailProps = {
  post: Post;
};

const PostDetail = ({ post: post }: PostDetailProps) => (
  <div className={styles.container}>
    <div className={styles.hgroup}>
      <div className={styles.category}>
        {post.category.map((cat) => (
          <span key={cat}>{cat}</span>
        ))}
      </div>
      <h1>{post.title}</h1>
      <div className={styles.post_meta}>
        <span>{post.date}</span>
      </div>
    </div>
    <ReactMarkdown
      className={styles.post_style}
      plugins={[gfm, math, toc]}
      renderers={renderers}
    >
      {post.content}
    </ReactMarkdown>
  </div>
);

export default PostDetail;
