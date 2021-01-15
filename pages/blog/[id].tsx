import { GetStaticProps, GetStaticPaths } from "next";
import { Post } from "../../interfaces";
import PostDetail from "../../components/blog/PostDetail";
import getPostsData from "../../utils/getPostsData";

type Props = {
  post?: Post;
  errors?: string;
};

const PostDetailPage = ({ post, errors }: Props) => {
  if (errors) {
    return (
      <>
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </>
    );
  }

  return <>{post && <PostDetail post={post} />}</>;
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getPostsData();
  const paths = allPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const allPosts = getPostsData();

    const id = params?.id;
    const post = allPosts.find((post) => post.id === id);
    return { props: { post } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
