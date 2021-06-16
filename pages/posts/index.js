import Posts from "../../components/posts/allposts";
import { getAllPosts } from "../../libhelpers/posts-utils";
import Head from "next/head";

const AllPosts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Posts posts={posts} />
    </>
  );
};

export const getStaticProps = (context) => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};

export default AllPosts;
