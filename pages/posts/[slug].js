import PostContent from "../../components/posts/post-content";
import { getPostData, getPostFiles } from "../../libhelpers/posts-utils";
import Head from "next/head";

const PostDetailPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{posts.data.excerpt}</title>
      </Head>

      <PostContent posts={posts} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { slug } = context.params;

  const post = getPostData(slug);

  return {
    props: {
      posts: post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilesNames = getPostFiles();
  const slugs = postFilesNames.map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
};

export default PostDetailPage;
