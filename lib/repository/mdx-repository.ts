import { myContainer } from "@/lib/inversify.config";

import { TYPES } from "@/lib/const";
import { bundleMDX } from "mdx-bundler";
import { MdxModel } from "@/lib/models/model";

export const mdxRepository = {
  mdxSource: async (source: string) => {
    const result = await bundleMDX({
      source: source,
    });
    const { code, frontmatter } = result;
    return { code, frontmatter };
  },
};

const genUrl = ({
  lang,
  postType,
  id,
}: {
  lang: string;
  postType: string;
  id: string;
}) => {
  const urlParams = new URLSearchParams({
    lang: lang,
    postType: postType,
    id: id,
  });
  return `${process.env.MDX_HOST_VERCEL_URL}/api/mdx-content/?${urlParams}`;
};