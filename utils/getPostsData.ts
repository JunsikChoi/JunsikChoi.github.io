import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../interfaces";

const postDIR = path.join(process.cwd(), "content/posts");

const getPostsData = (): Post[] => {
  const fileNames = fs.readdirSync(postDIR);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postDIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      category: matterResult.data.category,
      content: matterResult.content,
      bannerImg: matterResult.data.bannerImg || null,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export default getPostsData;
