import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "mdx");

export const fileService = {
  getContent: (lang: string, id: string) => {
    const fullPath = path.join(postsDirectory, `${lang}/${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return fileContents;
  },
};
