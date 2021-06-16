import PostHeader from "./posts-header";
import classes from "./post-content.module.css";
import ReactMarkDown from "react-markdown";
import Image from "next/image";

const PostContent = ({ posts }) => {
  const { image, title } = posts.data;
  const { slug, content } = posts;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <>
      <article className={classes.content}>
        <PostHeader image={imagePath} title={title} />
        <ReactMarkDown components={customRenderers}>{content}</ReactMarkDown>
      </article>
    </>
  );
};

export default PostContent;
