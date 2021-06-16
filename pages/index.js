import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../libhelpers/posts-utils";
import Head from "next/head";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog it!</title>
        <meta
          name="Blog"
          description="this is my blog page for full stack development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = (context) => {
  const FeaturedPosts = getFeaturedPosts();
  return {
    props: {
      posts: FeaturedPosts,
    },
  };
};

export default HomePage;
