import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postFile) => {
  const postFileName = postFile.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postFileName}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  const postData = {
    data,
    content,
    slug: postFileName,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featured = allPosts.filter((post) => post.data.isFeatured);

  return featured;
};
