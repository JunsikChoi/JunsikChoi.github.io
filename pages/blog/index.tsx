import * as React from "react";
import { GetStaticProps } from "next";
import { Post } from "../../interfaces";
import PostList from "../../components/blog/PostList";
import getPostsData from "../../utils/getPostsData";
import PageHead from "../../components/layout/PageHead";

type Props = {
  posts: Post[];
};

const PostListPage = ({ posts }: Props) => {
  return (
    <>
      <PageHead subtitle="BLOG"></PageHead>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsData();

  return { props: { posts } };
};

export default PostListPage;
